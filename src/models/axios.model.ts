import { AxiosResponse } from 'axios';

export interface IAxiosCall<T> {
  call: Promise<AxiosResponse<T>>;
  controller?: AbortController;
}
