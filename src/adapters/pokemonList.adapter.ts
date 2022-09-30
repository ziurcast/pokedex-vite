export const pokemonListAdapter = (data: any) => {
  const { count, next, previous, results } = data;
  return {
    next,
    count,
    previous,
    pokemonUrls: results.map((item: any) => item.url),
  };
};

export const pokemonListDetailsAdapter = (data: any) => {
  return data.map((item: any) => {
    return {
      id: item.id,
      name: item.name,
      order: item.order,
      height: item.height,
      weight: item.weight,
      baseExperience: item.base_experience,
      images: {
        frontShiny: item.sprites.other.home.front_shiny,
        frontDefault: item.sprites.other.home.front_default,
      },
      types: item.types.map(({ type }: any) => type),
    };
  });
};
