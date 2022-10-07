import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useUrlWatcher from './useUrlWatcher';
import { convertToQueryString, getQueryStringObject, removeQueryString } from '@/utils/queryString';
import { deleteFromObject } from '@/utils/objects';

const useFilters = () => {
  const navigate = useNavigate();
  const { queryObject, queryString } = useUrlWatcher();

  const setFilter = (obj: object) => {
    navigate({
      search: convertToQueryString({
        ...getQueryStringObject(),
        ...obj,
      }),
    });
  };

  const removeFilter = (name: string) => {
    navigate({
      search: removeQueryString(name),
    });
  };

  const filterValues = useMemo(() => {
    let currentQueryObject = queryObject;
    if (currentQueryObject.page) {
      currentQueryObject = deleteFromObject(currentQueryObject, 'page');
    }
    return currentQueryObject;
  }, [queryString]);

  const hasFilters = useMemo(() => {
    return !!Object.keys(filterValues).length;
  }, [filterValues]);

  return {
    setFilter,
    hasFilters,
    filterValues,
    removeFilter,
  };
};

export default useFilters;
