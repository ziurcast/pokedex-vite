export const pokemonDataAdapter = (data: any) => {
  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    baseExperience: data.base_experience,
    stats: {
      hp: data.stats.find(({ stat }: any) => stat.name === 'hp').base_stat,
      speed: data.stats.find(({ stat }: any) => stat.name === 'speed').base_stat,
      attack: data.stats.find(({ stat }: any) => stat.name === 'attack').base_stat,
      defense: data.stats.find(({ stat }: any) => stat.name === 'defense').base_stat,
      specialAttack: data.stats.find(({ stat }: any) => stat.name === 'special-attack').base_stat,
      specialDefense: data.stats.find(({ stat }: any) => stat.name === 'special-defense').base_stat,
    },
    images: {
      frontShiny: data.sprites.other['official-artwork'].front_shiny,
      frontDefault: data.sprites.other['official-artwork'].front_default,
    },
    types: data.types.map(({ type }: any) => type),
  };
};
