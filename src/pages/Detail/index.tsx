import React, { useEffect, useState, Fragment } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import useFetch from '@/hooks/useFetch';
import { getPokemonData } from '@/services/pokemonData.service';
import { pokemonDataAdapter } from '@/adapters/pokemonData.adapter';
import { ArrowLeftCircleIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/20/solid';
import LazyImage from '@/components/LazyImage';
import { IPokemonData, pokemonDataInitial } from '@/models/states.model';
import CONSTANTS from '@/utils/constants';
import StatisticsChart from '@/components/StatisticsChart';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, request } = useFetch();
  const [pokemonData, setPokemonData] = useState<IPokemonData>(pokemonDataInitial);
  const { types, images, name, stats } = pokemonData;

  const handleGetPokemonDetail = async () => {
    if (!loading && id) {
      const response = await request(getPokemonData(id));
      const data: IPokemonData = pokemonDataAdapter(response);
      setPokemonData(data);
    }
  };

  useEffect(() => {
    handleGetPokemonDetail();
  }, [id]);

  return (
    <Fragment>
      <div className="bg-black drop-shadow-md">
        <div className="container px-7 py-10">
          <div
            className="h-12 flex items-center cursor-pointer"
            onClick={() => navigate(location.state ? location.state.from : '/')}
          >
            <ArrowLeftCircleIcon className="text-white w-8" />
            <p className="pl-4 text-white hover:underline">Go Back</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="pt-16 pb-6 px-3 flex justify-between items-center">
          <button
            disabled={Number(id) - 1 === 0}
            className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:underline flex items-center"
            onClick={() => navigate(`/pokemon/${Number(id) - 1}`)}
          >
            <ChevronLeftIcon className="text-black w-8" />
            <p className="pl-4 text-lg text-black font-semibold">Prev</p>
          </button>
          <h1 className="capitalize drop-shadow-md px-4 py-2 bg-black rounded-md text-white text-3xl font-medium">
            {name}{' '}
            <span className="text-silver lowercase font-light">
              {String(Number(id)).padStart(3, '0')}
            </span>
          </h1>
          <button
            className="cursor-pointer flex items-center"
            disabled={Number(id) + 1 === CONSTANTS.LIST_LIMIT}
            onClick={() => navigate(`/pokemon/${Number(id) + 1}`)}
          >
            <p className="pr-4 text-lg text-black font-semibold hover:underline">Next</p>
            <ChevronRightIcon className="text-black w-8" />
          </button>
        </div>
        <div className="flex flex-wrap pb-16 w-11/12 m-auto">
          <div className="w-1/2 h-auto p-3">
            <div className="h-full py-8 rounded-lg bg-gradient-to-b from-gray-light to-white drop-shadow-md">
              <LazyImage
                className="max-w-96 max-h-96 m-auto object-contain drop-shadow-lg"
                placeholder="/images/placeholder-image.png"
                src={images.frontDefault}
                alt={name}
              />
              <StatisticsChart stats={stats} />
            </div>
          </div>
          <div className="w-1/2 h-auto p-3">
            <div className="h-full rounded-lg bg-gradient-to-b from-gray-light to-white drop-shadow-md"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Detail;
