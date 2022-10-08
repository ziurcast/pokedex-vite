import React, { useEffect, Fragment, useState, ChangeEvent, useRef } from 'react';
import useFetch from '@/hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { IAppStore } from '@/models/store.model';
import Pagination from '@/components/Pagination';
import usePagination from '@/hooks/usePagination';
import { useDispatch, useSelector } from 'react-redux';
import { setAllPokemons, setFilteredPokemons } from '@/store/states/pokemons';
import { getAllPokemons } from '@/services/pokemonLists.service';
import { pokemonListAdapter } from '@/adapters/pokemonList.adapter';
import PokemonCard, { PokemonCardLoading } from '@/components/PokemonCard';
import Input from '@/components/common/Input';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import useFilters from '@/hooks/useFilters';
import { filterBy } from '@/utils/filters';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTimeOut: any = useRef(0);
  const { loading, request } = useFetch();
  const [loadingSearch, setLoadingSearch] = useState(false);
  const { setFilter, filterValues, removeFilter, hasFilters } = useFilters();
  const { allPokemons, filteredPokemons } = useSelector((store: IAppStore) => store.pokemons);
  const { data, changePageTo, totalItems, currentPage, perPage } = usePagination({
    perPage: 20,
    initialPage: 1,
    data: hasFilters ? filteredPokemons : allPokemons,
  });
  const [filters, setFilters] = useState<any>({
    name: '',
    ...filterValues,
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

  useEffect(() => {
    if (hasFilters && allPokemons.length) {
      const filteredPokemons = filterBy(allPokemons, filterValues);
      dispatch(setFilteredPokemons(filteredPokemons));
    }
  }, [hasFilters, filterValues]);

  const handleOnChangeFilters = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const valueTrim = value.trim();

    setFilters((prev: any) => ({ ...prev, [name]: valueTrim }));

    if (valueTrim && valueTrim.length > 1 && name === 'name') {
      setLoadingSearch(true);
      searchTimeOut.current = setTimeout(() => {
        changePageTo(1);
        setLoadingSearch(false);
        setFilter({ [name]: valueTrim });
      }, 2000);
    } else {
      removeFilter(name);
    }
  };

  const handleOnCleanFilters = (name: string) => {
    removeFilter(name);
    setFilters((prev: any) => ({ ...prev, [name]: '' }));
  };

  return (
    <Fragment>
      <div className="bg-black drop-shadow-md rounded-b-2xl">
        <div className="container px-7 py-12">
          <Input
            name="name"
            cleaneable={true}
            autoComplete="off"
            value={filters.name}
            Icon={MagnifyingGlassIcon}
            onChange={handleOnChangeFilters}
            loadig={loadingSearch || loading}
            placeholder="Search by name or id"
            disabled={loadingSearch || loading}
            onClean={() => handleOnCleanFilters('name')}
            onKeyDown={() => clearTimeout(searchTimeOut.current)}
          />
        </div>
      </div>

      <div className="container">
        {data.length > 0 && !loading && (
          <Fragment>
            <div className="flex flex-wrap py-16">
              {data.map((pokemon: any, idx) => (
                <PokemonCard
                  data={pokemon}
                  key={idx}
                  onClick={(id) => navigate(`/pokemon/${id}`)}
                />
              ))}
            </div>
            <Pagination pagination={{ perPage, totalItems, currentPage, changePageTo }} />
          </Fragment>
        )}
        {loading && (
          <div className="flex flex-wrap py-16">
            {Array.from(Array(20).keys()).map((key) => (
              <PokemonCardLoading key={`skeleton-${key}`} />
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Home;
