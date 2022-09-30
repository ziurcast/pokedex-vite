import { useEffect, useState } from 'react';
import { IAxiosCall } from '@/models/axios.model';
import { AxiosResponse } from 'axios';

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  let controller: AbortController;

  const data = (response: AxiosResponse<any> | AxiosResponse[]) =>
    Array.isArray(response) ? response.map((response) => response.data) : response.data;

  const request = async (IAxiosCall: IAxiosCall<any>) => {
    if (IAxiosCall.controller) controller = IAxiosCall.controller;
    setLoading(true);
    let response: AxiosResponse<any> | AxiosResponse[];
    try {
      response = await IAxiosCall.call;
    } catch (err: any) {
      setLoading(false);
      throw err;
    }
    setLoading(false);
    return data(response);
  };

  const cancelRequest = () => {
    setLoading(false);
    controller && controller.abort();
  };

  useEffect(() => {
    return () => {
      cancelRequest();
    };
  }, []);

  return { loading, request };
};

export default useFetch;
