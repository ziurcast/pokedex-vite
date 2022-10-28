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

export const weaknessesByType = (type: string) => {
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

export const pokemonWeaknesses = (types: Array<IPokemonType>) => {
  const typeDebilities: Array<string> = [];

  types.forEach(({ name }) => {
    weaknessesByType(name).forEach((type) => {
      if (!typeDebilities.includes(type)) {
        typeDebilities.push(type);
      }
    });
  });

  return typeDebilities;
};

const types = {
  normal: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1, 1],
  fire: [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1, 1],
  water: [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1],
  electric: [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1],
  grass: [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1, 1],
  ice: [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1, 1],
  fighting: [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5, 1],
  poison: [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2, 1],
  ground: [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1, 1],
  flying: [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1, 1],
  psychic: [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1, 1],
  bug: [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5, 1],
  rock: [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1],
  ghost: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1, 1],
  dragon: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0, 1],
  dark: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5, 1],
  steel: [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2, 1],
  fairy: [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1, 1],
  none: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
};

export const calculatePokemonWeaknesses = (pokemonTypes: Array<IPokemonType>) => {
  const typesValues: Array<number[]> = Object.values(types);
  const typeIdx1: number = Object.keys(types).indexOf(pokemonTypes[0]?.name);
  const typeIdx2: number = pokemonTypes[1]?.name
    ? Object.keys(types).indexOf(pokemonTypes[1]?.name)
    : 18;

  const result: Array<any> = Array.from(Array(18).keys())
    .map((idx) => ({
      type: Object.keys(types)[idx],
      percentageDmg: typesValues[idx][typeIdx1] * typesValues[idx][typeIdx2],
    }))
    .filter(({ percentageDmg }) => percentageDmg === 2);

  return result;
};
