import { createSlice } from '@reduxjs/toolkit';
import { IPokemonsSlice } from '@/models/store.model';

export const initialState: IPokemonsSlice = {
  allPokemons: [],
  filteredPokemons: [],
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setAllPokemons: (state, action) => ({ ...state, allPokemons: action.payload }),
    setFilteredPokemons: (state, action) => ({ ...state, filteredPokemons: action.payload }),
  },
});

export const { setAllPokemons, setFilteredPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
