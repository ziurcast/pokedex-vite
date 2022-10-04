export const pokemonListAdapter = (data: any) => {
  const { count, next, previous, results } = data;
  return {
    next,
    count,
    previous,
    pokemons: results.map((item: any, idx: number) => ({ ...item, id: idx + 1 })),
  };
};

export const pokemonDataAdapter = (data: any) => {
  return {
    id: data.id,
    name: data.name,
    order: data.order,
    height: data.height,
    weight: data.weight,
    baseExperience: data.base_experience,
    images: {
      frontShiny: data.sprites.other.home.front_shiny,
      frontDefault: data.sprites.other.home.front_default,
    },
    types: data.types.map(({ type }: any) => type),
    stats: {
      hp: data.stats.find(({ stat }: any) => stat.name === 'hp').base_stat,
      attack: data.stats.find(({ stat }: any) => stat.name === 'attack').base_stat,
      defense: data.stats.find(({ stat }: any) => stat.name === 'defense').base_stat,
      speed: data.stats.find(({ stat }: any) => stat.name === 'speed').base_stat,
    },
  };
};
