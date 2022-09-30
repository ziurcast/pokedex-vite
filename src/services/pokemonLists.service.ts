import { axiosAbort } from '@/utils/axios';
import Axios from 'axios';
import queryString from 'query-string';
import { PokemonListArgs } from '@/models/services.model';

export const getPokemonList = (dataQuery: PokemonListArgs) => {
  const controller = axiosAbort();
  const query: string = queryString.stringify(dataQuery);

  return {
    call: Axios.get(`${process.env.VITE_APP_API}/pokemon?${query}`, { signal: controller.signal }),
    controller: axiosAbort(),
  };
};

export const getPokemonListDetails = (pokemons: string[]) => {
  const controller = axiosAbort();

  return {
    call: Axios.all(pokemons.map((url: string) => Axios.get(url, { signal: controller.signal }))),
    controller,
  };
};
