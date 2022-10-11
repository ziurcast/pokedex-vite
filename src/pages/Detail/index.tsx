import React, { useEffect, useState, Fragment } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '@/hooks/useFetch';
import { getPokemonData } from '@/services/pokemonData.service';
import { pokemonDataAdapter } from '@/adapters/pokemonData.adapter';
import { ArrowLeftCircleIcon } from '@heroicons/react/20/solid';
import LazyImage from '@/components/LazyImage';
import { IPokemonData, pokemonDataInitial } from '@/models/states.model';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, request } = useFetch();
  const [pokemonData, setPokemonData] = useState<IPokemonData>(pokemonDataInitial);
  const { types, images, name } = pokemonData;

  const handleGetPokemonDetail = async () => {
    if (!loading && id) {
      const response = await request(getPokemonData(id));
      const data: IPokemonData = pokemonDataAdapter(response);
      setPokemonData(data);
    }
  };

  useEffect(() => {
    handleGetPokemonDetail();
  }, []);

  return (
    <Fragment>
      <div className="bg-black drop-shadow-md">
        <div className="container px-7 py-10">
          <ArrowLeftCircleIcon
            className="text-white w-12 cursor-pointer"
            onClick={() => navigate(-1)}
          />
        </div>
      </div>

      <div className="container">
        <div className="flex flex-wrap py-16">
          <div className="w-1/2 h-60 p-3">
            <div className="h-full rounded-lg bg-gradient-to-b from-gray-light to-white drop-shadow-md">
              <LazyImage
                className="w-4/5 h-40 lg:h-52 m-auto object-contain relative z-[2] drop-shadow-lg"
                placeholder="/images/placeholder-image.png"
                src={images.frontDefault}
                alt={name}
              />
            </div>
          </div>
          <div className="w-1/2 h-60 p-3">
            <div className="h-full rounded-lg bg-gradient-to-b from-gray-light to-white drop-shadow-md"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Detail;
