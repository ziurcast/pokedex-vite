import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const useUrlWatcher = () => {
  const { search, pathname } = useLocation();
  const [prevSearch, setPreSearch] = useState<string>('');
  const [pathData, setPathData] = useState<any>({
    pathname,
    queryString: search,
    queryObject: queryString.parse(search) || {},
  });

  useEffect(() => {
    if (prevSearch !== search) {
      setPreSearch(search);
      setPathData({
        pathname,
        queryString: search,
        queryObject: queryString.parse(search) || {},
      });
    }
  }, [search]);

  return pathData;
};

export default useUrlWatcher;
