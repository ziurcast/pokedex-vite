import { axiosAbort } from '@/utils/axios';
import Axios from 'axios';

export const getAllPokemons = () => {
  const controller = axiosAbort();
  return {
    call: Axios.get(`${process.env.VITE_APP_API}/pokemon?limit=905&offset=0`, {
      signal: controller.signal,
    }),
    controller: axiosAbort(),
  };
};

export const getPokemonDetail = (url: string) => {
  const controller = axiosAbort();
  return {
    call: Axios.get(url, {
      signal: controller.signal,
    }),
    controller: axiosAbort(),
  };
};
