import { configureStore } from '@reduxjs/toolkit';
import pokemonsSlice from './states/pokemons';
import { IAppStore } from '@/models/store.model';

export default configureStore<IAppStore>({
  reducer: {
    pokemons: pokemonsSlice,
  },
});
