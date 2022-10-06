import React, { useEffect, useState, Fragment } from 'react';
import { getAllPokemons } from '@/services/pokemonLists.service';
import { IPokemonDataBasic } from '@/models/states.model';
import { pokemonListAdapter } from '@/adapters/pokemonList.adapter';
import { useNavigate } from 'react-router-dom';
import Pagination from '@/components/Pagination';
import PokemonCard, { PokemonCardLoading } from '@/components/PokemonCard';
import useFetch from '@/hooks/useFetch';
import usePagination from '@/hooks/usePagination';
import { useDispatch, useSelector } from 'react-redux';
import { setAllPokemons } from '@/store/states/pokemons';
import { IAppStore } from '@/models/store.model';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, request } = useFetch();
  const { allPokemons } = useSelector((store: IAppStore) => store.pokemons);
  const { data, changePageTo, totalItems, currentPage, perPage } = usePagination({
    perPage: 20,
    initialPage: 1,
    data: allPokemons,
  });

  const handleGetPokemons = async () => {
    if (!loading) {
      const response = await request(getAllPokemons());
      const { pokemons } = pokemonListAdapter(response);
      dispatch(setAllPokemons(pokemons));
    }
  };

  useEffect(() => {
    handleGetPokemons();
  }, []);

  return (
    <Fragment>
      {loading && (
        <div className="flex flex-wrap py-16">
          {Array.from(Array(20).keys()).map((key) => (
            <PokemonCardLoading key={`skeleton-${key}`} />
          ))}
        </div>
      )}
      {data.length > 0 && !loading && (
        <Fragment>
          <div className="flex flex-wrap py-16">
            {data.map((pokemon: any, idx) => (
              <PokemonCard data={pokemon} key={idx} onClick={(id) => navigate(`/pokemon/${id}`)} />
            ))}
          </div>
          <Pagination pagination={{ perPage, totalItems, currentPage, changePageTo }} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
