import { axiosAbort } from '@/utils/axios';
import Axios from 'axios';
import CONSTANTS from '@/utils/constants';

export const getAllPokemons = () => {
  const controller = axiosAbort();
  return {
    call: Axios.get(`${process.env.VITE_APP_API}/pokemon?limit=${CONSTANTS.LIST_LIMIT}&offset=0`, {
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
