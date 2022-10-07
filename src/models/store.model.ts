import { IPokemonDataBasic } from './states.model';

export interface IPokemonsSlice {
  allPokemons: IPokemonDataBasic[];
  filteredPokemons: IPokemonDataBasic[];
}

export interface IAppStore {
  pokemons: IPokemonsSlice;
}
