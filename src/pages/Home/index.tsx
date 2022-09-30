import React, { useEffect, useState, Fragment } from 'react';
import useFetch from '@/hooks/useFetch';
import PokemonCard, { PokemonCardLoading } from '@/components/PokemonCard';
import { pokemonListAdapter, pokemonListDetailsAdapter } from '@/adapters/pokemonList.adapter';
import { getPokemonList, getPokemonListDetails } from '@/services/pokemonLists.service';
import { IPokemonDataBasic, IPaginationData } from '@/models/states.model';
import Pagination from '@/components/Pagination';
import usePathWatcher from '@/hooks/usePathWatcher';

const Home = () => {
  const currentPathData = usePathWatcher();
  const { loading, request } = useFetch();
  const [pokemonList, setPokemonList] = useState<IPokemonDataBasic[]>([]);
  const [paginationData, setPaginationData] = useState<IPaginationData>({
    offset: 0,
    limit: 20,
    next: null,
    count: null,
    previous: null,
  });

  const handleGetPokemons = async ({ limit, offset }: any) => {
    if (!loading) {
      const response = await request(getPokemonList({ limit, offset }));
      const { pokemonUrls, count, next, previous } = pokemonListAdapter(response);
      setPaginationData({ limit, offset, count, next, previous });
      const pokemonDetailsResponse = await request(getPokemonListDetails(pokemonUrls));
      const pokemons = pokemonListDetailsAdapter(pokemonDetailsResponse);
      setPokemonList(pokemons);
    }
  };

  useEffect(() => {
    const { query } = currentPathData;
    handleGetPokemons({
      limit: Object.keys(query).length ? query.limit : paginationData.limit,
      offset: Object.keys(query).length ? query.offset : paginationData.offset,
    });
  }, [currentPathData]);

  return (
    <Fragment>
      {loading ? (
        <Fragment>
          <div className="flex flex-wrap py-16">
            {Array.from(Array(20).keys()).map((key) => (
              <PokemonCardLoading key={`skeleton-${key}`} />
            ))}
          </div>
        </Fragment>
      ) : (
        !!pokemonList.length && (
          <Fragment>
            <div className="flex flex-wrap py-16">
              {pokemonList.map((pokemon: any) => (
                <PokemonCard key={pokemon.id} data={pokemon} />
              ))}
            </div>
            <Pagination pagination={paginationData} />
          </Fragment>
        )
      )}
    </Fragment>
  );
};

export default Home;
