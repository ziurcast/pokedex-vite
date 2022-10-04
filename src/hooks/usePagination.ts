import { useState, useCallback, useEffect } from 'react';
import queryString from 'query-string';
import { IPokemonDataBasic } from '@/models/states.model';
import { useNavigate, useLocation } from 'react-router-dom';

interface IProps {
  data: IPokemonDataBasic[];
  initialPage: number;
  perPage: number;
}

const usePagination = ({ data: initialData, initialPage, perPage }: IProps) => {
  const navegate = useNavigate();
  const { search, pathname } = useLocation();
  const [data, setData] = useState<IPokemonDataBasic[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(
    Number(queryString.parse(search).page) || initialPage
  );

  useEffect(() => {
    console.log('Cambia data usePagination');
  }, [data]);

  const changePageTo = (nextPage: number) => {
    const query = queryString.parse(search);
    const nextQuery = { ...query, page: nextPage };
    const queryStringify = `?${queryString.stringify(nextQuery)}`;
    navegate({
      pathname,
      search: queryStringify,
    });

    setCurrentPage(nextPage);
  };

  const paginate = () => {
    const nextData = initialData.slice((currentPage - 1) * perPage, currentPage * perPage);
    setData([...nextData]);
  };

  useEffect(() => {
    if (initialData.length && currentPage) {
      paginate();
    }
  }, [initialData, currentPage]);

  return {
    data,
    perPage,
    currentPage,
    changePageTo,
    totalItems: initialData.length || 0,
  };
};

export default usePagination;
