import { axiosAbort } from '@/utils/axios';
import Axios from 'axios';

export const getPokemonData = (id: string) => {
  const controller = axiosAbort();
  return {
    call: Axios.get(`${process.env.VITE_APP_API}/pokemon/${id}`, {
      signal: controller.signal,
    }),
    controller: axiosAbort(),
  };
};
