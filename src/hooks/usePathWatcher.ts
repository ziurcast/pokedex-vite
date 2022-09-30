import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const usePathWatcher = () => {
  const location = useLocation();
  const { current: currentSerach } = useRef(location.search);
  const [pathData, setPathData] = useState<any>({
    pathname: location.pathname,
    query: queryString.parse(location.search),
  });

  useEffect(() => {
    const { search, pathname } = location;
    if (currentSerach !== search) {
      setPathData({
        pathname,
        query: queryString.parse(search),
      });
    }
  }, [location]);

  return pathData;
};

export default usePathWatcher;