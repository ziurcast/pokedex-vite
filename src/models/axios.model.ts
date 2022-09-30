import { AxiosResponse } from 'axios';

export interface IAxiosCall<T> {
  call: Promise<AxiosResponse<T>> | Promise<AxiosResponse[]>;
  controller?: AbortController;
}
