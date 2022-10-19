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
import tailwind from '../../../tailwind';
import CustomCard from '@/components/Cards/CustomCard';
import { pokemonDebilities } from '@/utils/pokemon';

const Detail = () => {
  const colors: any = tailwind.theme.colors;
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
      <div className="bg-black drop-shadow-md rounded-b-3xl">
        <div className="container">
          <div
            className="h-28 flex items-center cursor-pointer"
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
          <button
            className="cursor-pointer flex items-center"
            disabled={Number(id) + 1 === CONSTANTS.LIST_LIMIT}
            onClick={() => navigate(`/pokemon/${Number(id) + 1}`)}
          >
            <p className="pr-4 text-lg text-black font-semibold hover:underline">Next</p>
            <ChevronRightIcon className="text-black w-8" />
          </button>
        </div>

        <div className="flex flex-wrap pb-16 w-11/12 m-auto gap-4">
          <CustomCard
            animate={false}
            loading={loading}
            bgColor={colors.type[types[0].name]}
            className="w-1/3 h-auto cursor-auto"
          >
            <div className="py-8 px-4">
              <LazyImage
                className="max-w-96 max-h-96 m-auto object-contain drop-shadow-lg"
                placeholder="/images/placeholder-image.png"
                src={images.frontDefault}
                alt={name}
              />
            </div>
          </CustomCard>

          <CustomCard
            animate={false}
            loading={loading}
            loadingSpinner={false}
            bgColor={colors.type[types[0].name]}
            className="h-auto grow cursor-auto"
          >
            <div className="pt-14 p-4">
              <h1 className="capitalize top-0 left-0 absolute rounded-br-lg text-center drop-shadow-md px-4 py-2 bg-black text-white text-3xl font-medium">
                {name}{' '}
                <span className="text-silver lowercase font-light">
                  {String(Number(id)).padStart(3, '0')}
                </span>
              </h1>
              <h3 className="font-bold mb-2">Type</h3>
              <ul className="flex flex-wrap gap-2 mb-2">
                {!!types.length &&
                  types.map(({ name }, idx) => (
                    <li
                      key={`item-${idx}`}
                      style={{ backgroundColor: colors.type[name] }}
                      className="rounded-md h-6 p-1 drop-shadow-lg flex items-center w-fit"
                    >
                      <LazyImage
                        alt={name}
                        className="w-4 h-4 p-0.5"
                        src={`/svg/${name}.svg`}
                        placeholder="/images/placeholder-image.png"
                      />
                      <p className="text-gray-light capitalize text-sm px-1">{name}</p>
                    </li>
                  ))}
              </ul>
              <h3 className="font-bold mb-2">Debilities</h3>
              <ul className="flex flex-wrap gap-2 mb-2">
                {!!types.length &&
                  pokemonDebilities(types).map((name, idx) => (
                    <li
                      key={`item-${idx}`}
                      style={{ backgroundColor: colors.type[name] }}
                      className="rounded-md h-6 p-1 drop-shadow-lg flex items-center w-fit"
                    >
                      <LazyImage
                        alt={name}
                        className="w-4 h-4 p-0.5"
                        src={`/svg/${name}.svg`}
                        placeholder="/images/placeholder-image.png"
                      />
                      <p className="text-gray-light capitalize text-sm px-1">{name}</p>
                    </li>
                  ))}
              </ul>
              <StatisticsChart stats={stats} />
            </div>
          </CustomCard>
        </div>
      </div>
    </Fragment>
  );
};

export default Detail;
