import React, { useState, useEffect, Fragment } from 'react';
import tailwind from '../../../../tailwind';
import LazyImage from '@/components/LazyImage';
import { IPokemonData, IPokemonDataBasic, pokemonDataInitial } from '@/models/states.model';
import useFetch from '@/hooks/useFetch';
import { getPokemonDetail } from '@/services/pokemonLists.service';
import { pokemonDataAdapter } from '@/adapters/pokemonList.adapter';
import CustomCard from '../CustomCard';

interface Props {
  data: IPokemonDataBasic;
  onClick: (id: number) => void;
}

const PokemonCard = ({ data, onClick }: Props) => {
  const colors: any = tailwind.theme.colors;
  const { loading, request } = useFetch();
  const [pokemonData, setPokemonData] = useState<IPokemonData>(pokemonDataInitial);
  const { types, id, images, name } = pokemonData;

  const handleGetPokemonData = async () => {
    if (!loading) {
      const response = await request(getPokemonDetail(data.url));
      const pokemon: IPokemonData = pokemonDataAdapter(response);
      setPokemonData(pokemon);
    }
  };

  useEffect(() => {
    handleGetPokemonData();
  }, [data]);

  return (
    <Fragment>
      {loading && <CustomCard loading={true} className="w-64" />}
      {!loading && id && (
        <CustomCard
          className={'w-64'}
          onClick={() => onClick(id)}
          bgColor={colors.type[types[0].name]}
        >
          <div className="flex items-center rounded-br-lg justify-center z-[3] absolute bg-black top-0 p-2 left-0 min-w-10 h-10">
            <h2 className="text-gray-light font-bold">{String(Number(id)).padStart(3, '0')}</h2>
          </div>
          <LazyImage
            className="w-4/5 h-40 lg:h-52 m-auto object-contain z-[2] drop-shadow-lg"
            placeholder="/images/placeholder-image.png"
            src={images.frontDefault}
            alt={name}
          />
          <div className="w-full py-3">
            <h3 className="w-fit h-6 m-auto px-3 rounded-md font-bold text-center capitalize text-gray-light bg-black">
              {name}
            </h3>
            <div className="flex w-full justify-center mt-2">
              {!!types.length &&
                types.map(({ name }, idx) => (
                  <div
                    key={`item-${idx}`}
                    style={{ backgroundColor: colors.type[name] }}
                    className="rounded-md h-6 p-1 mx-1 drop-shadow-lg flex items-center"
                  >
                    <LazyImage
                      alt={name}
                      className="w-4 h-4 p-0.5"
                      src={`/svg/${name}.svg`}
                      placeholder="/images/placeholder-image.png"
                    />
                    <p className="text-gray-light capitalize text-sm px-1">{name}</p>
                  </div>
                ))}
            </div>
          </div>
        </CustomCard>
      )}
    </Fragment>
  );
};

export default PokemonCard;
