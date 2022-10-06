import { createSlice } from '@reduxjs/toolkit';
import { IPokemonsSlice } from '@/models/store.model';

export const initialState: IPokemonsSlice = {
  allPokemons: [],
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setAllPokemons: (state, action) => ({ ...state, allPokemons: action.payload }),
  },
});

export const { setAllPokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
