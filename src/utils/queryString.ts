import queryString from 'query-string';

export const getQueryStringObject = (query?: string) => {
  return queryString.parse(query || window.location.search);
};

export const convertToQueryString = (obj: object) => {
  return `?${queryString.stringify(obj)}`;
};

export const removeQueryString = (name: string, query?: string) => {
  const currentQueryObject = getQueryStringObject(query || window.location.search);
  delete currentQueryObject[name];
  return convertToQueryString(currentQueryObject);
};
