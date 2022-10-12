export const pokemonDataAdapter = (data: any) => {
  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
    baseExperience: data.base_experience,
    stats: {
      hp: {
        value: data.stats.find(({ stat }: any) => stat.name === 'hp').base_stat,
        label: 'Hp',
      },
      speed: {
        value: data.stats.find(({ stat }: any) => stat.name === 'speed').base_stat,
        label: 'Speed',
      },
      attack: {
        value: data.stats.find(({ stat }: any) => stat.name === 'attack').base_stat,
        label: 'Attack',
      },
      defense: {
        value: data.stats.find(({ stat }: any) => stat.name === 'defense').base_stat,
        label: 'Defense',
      },
      specialAttack: {
        value: data.stats.find(({ stat }: any) => stat.name === 'special-attack').base_stat,
        label: 'Special Attack',
      },
      specialDefense: {
        value: data.stats.find(({ stat }: any) => stat.name === 'special-defense').base_stat,
        label: 'Special Defense',
      },
    },
    images: {
      frontShiny: data.sprites.other['official-artwork'].front_shiny,
      frontDefault: data.sprites.other['official-artwork'].front_default,
    },
    types: data.types.map(({ type }: any) => type),
  };
};
