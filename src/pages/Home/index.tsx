import React, { useEffect, Fragment, useState, ChangeEvent } from 'react';
import useFetch from '@/hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { IAppStore } from '@/models/store.model';
import Pagination from '@/components/Pagination';
import usePagination from '@/hooks/usePagination';
import { useDispatch, useSelector } from 'react-redux';
import { setAllPokemons } from '@/store/states/pokemons';
import { getAllPokemons } from '@/services/pokemonLists.service';
import { pokemonListAdapter } from '@/adapters/pokemonList.adapter';
import PokemonCard, { PokemonCardLoading } from '@/components/PokemonCard';
import Input from '@/components/common/Input';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, request } = useFetch();
  const [search, setSearch] = useState('');
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
    if (!allPokemons.length) {
      handleGetPokemons();
    }
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <Fragment>
      <div className="pt-16 px-3">
        <Input
          value={search}
          loadig={false}
          cleaneable={true}
          onChange={handleSearch}
          Icon={MagnifyingGlassIcon}
          onClean={() => setSearch('')}
          placeholder="Buscar por nombre o número"
        />
      </div>
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
