import { useState, useEffect, useMemo } from 'react';
import queryString from 'query-string';
import { IPokemonDataBasic } from '@/models/states.model';
import { useNavigate, useLocation } from 'react-router-dom';

interface IProps {
  data: IPokemonDataBasic[];
  initialPage: number;
  perPage: number;
}

const usePagination = ({ data: initialData, initialPage, perPage }: IProps) => {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const [data, setData] = useState<IPokemonDataBasic[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(
    Number(queryString.parse(search).page) || initialPage
  );

  const paginate = (nextPage?: number) => {
    const page = nextPage || currentPage;
    const nextData = initialData.slice((page - 1) * perPage, page * perPage);
    setData([...nextData]);
  };

  const changePageTo = (nextPage: number) => {
    const query = queryString.parse(search);
    const nextQuery = { ...query, page: nextPage };
    const queryStringify = `?${queryString.stringify(nextQuery)}`;
    navigate({
      pathname,
      search: queryStringify,
    });

    setCurrentPage(nextPage);
    paginate(nextPage);
  };

  useEffect(() => {
    if (currentPage) {
      setTotalItems(initialData.length || 0);
      paginate();
    }
  }, [initialData]);

  return {
    data,
    perPage,
    totalItems,
    currentPage,
    changePageTo,
  };
};

export default usePagination;
