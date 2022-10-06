import { IPokemonDataBasic } from './states.model';

export interface IPokemonsSlice {
  allPokemons: IPokemonDataBasic[];
}

export interface IAppStore {
  pokemons: IPokemonsSlice;
}
