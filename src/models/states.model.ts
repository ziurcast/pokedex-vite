export interface IPokemonData {
  id: number | null;
  name: string;
  order?: number | null;
  height: number | null;
  weight: number | null;
  baseExperience: number | null;
  images: {
    frontShiny: string;
    frontDefault: string;
  };
  types: [
    {
      name: string;
      url: string;
    }
  ];
  stats: {
    hp: number | null;
    attack: number | null;
    defense: number | null;
    speed: number | null;
    specialAttack: number | null;
    specialDefense: number | null;
  };
}

export const pokemonDataInitial: IPokemonData = {
  id: null,
  name: '',
  order: null,
  height: null,
  weight: null,
  baseExperience: null,
  images: {
    frontShiny: '',
    frontDefault: '',
  },
  types: [
    {
      name: '',
      url: '',
    },
  ],
  stats: {
    hp: null,
    attack: null,
    defense: null,
    speed: null,
    specialAttack: null,
    specialDefense: null,
  },
};

export interface IPokemonDataBasic {
  name: string;
  url: string;
  id: number;
}

export interface IPaginationData {
  next?: string | null;
  count?: number | null;
  limit?: number;
  offset?: number;
  previous?: string | null;

  perPage: number;
  totalItems: number;
  currentPage: number;
  changePageTo: (arg: number) => void;
}
