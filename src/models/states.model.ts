export interface IPokemonDataBasic {
  id: number;
  name: string;
  order: number;
  height: number;
  weight: number;
  baseExperience: number;
  images: {
    frontShiny: string;
    frontDefault: string;
  };
  types: [
    {
      name: string;
      url: string;
    },
    {
      name: string;
      url: string;
    }
  ];
}

export interface IPaginationData {
  next: string | null;
  count: number | null;
  limit?: number;
  offset?: number;
  previous: string | null;
}
