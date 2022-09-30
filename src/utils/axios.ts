export const axiosAbort = () => {
  const controller = new AbortController();
  return controller;
};