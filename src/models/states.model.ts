export interface IPokemonStats {
  hp: {
    value: number | null;
    label: string;
  };
  attack: {
    value: number | null;
    label: string;
  };
  defense: {
    value: number | null;
    label: string;
  };
  speed: {
    value: number | null;
    label: string;
  };
  specialAttack: {
    value: number | null;
    label: string;
  };
  specialDefense: {
    value: number | null;
    label: string;
  };
}

export interface IPokemonType {
  name: string;
  url: string;
}

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
  types: IPokemonType[];
  stats: IPokemonStats;
}

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
    hp: {
      value: null,
      label: '',
    },
    attack: {
      value: null,
      label: '',
    },
    defense: {
      value: null,
      label: '',
    },
    speed: {
      value: null,
      label: '',
    },
    specialAttack: {
      value: null,
      label: '',
    },
    specialDefense: {
      value: null,
      label: '',
    },
  },
};
