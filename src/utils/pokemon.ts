import CONSTANTS from './constants';
import { IPokemonType } from '@/models/states.model';

const {
  POKEMON_TYPES: {
    BUG,
    DARK,
    DRAGON,
    ELECTRIC,
    FAIRY,
    FIGHTING,
    FIRE,
    FLYING,
    GHOST,
    GRASS,
    GROUND,
    ICE,
    NORMAL,
    POISON,
    PSYCHIC,
    ROCK,
    STEEL,
    WATER,
  },
} = CONSTANTS;

export const debilitiesByType = (type: string) => {
  switch (type) {
    case BUG:
      return [FLYING, ROCK, FIRE];
    case DARK:
      return [FIGHTING, BUG, FAIRY];
    case DRAGON:
      return [ICE, DRAGON, FAIRY];
    case ELECTRIC:
      return [GROUND];
    case FAIRY:
      return [POISON, STEEL];
    case FIGHTING:
      return [FLYING, PSYCHIC, FAIRY];
    case FIRE:
      return [WATER, GROUND, ROCK];
    case FLYING:
      return [ELECTRIC, ICE, ROCK];
    case GHOST:
      return [GHOST, DARK];
    case GRASS:
      return [FIRE, ICE, POISON, FLYING, BUG];
    case GROUND:
      return [WATER, GRASS, ICE];
    case ICE:
      return [FIRE, FIGHTING, ROCK, STEEL];
    case NORMAL:
      return [FIGHTING];
    case POISON:
      return [GROUND, PSYCHIC];
    case PSYCHIC:
      return [BUG, GHOST, DARK];
    case ROCK:
      return [WATER, GRASS, FIGHTING, GROUND, STEEL];
    case STEEL:
      return [FIRE, FIGHTING, GROUND];
    case WATER:
      return [GRASS, ELECTRIC];
    default:
      return [];
  }
};

export const pokemonDebilities = (types: Array<IPokemonType>) => {
  const typeDebilities: Array<string> = [];

  types.forEach(({ name }) => {
    debilitiesByType(name).forEach((type) => {
      if (!typeDebilities.includes(type)) {
        typeDebilities.push(type);
      }
    });
  });

  return typeDebilities;
};
