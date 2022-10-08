import React, { useState, useEffect, Fragment } from 'react';
import tailwind from '../../../tailwind';
import LazyImage from '@/components/LazyImage';
import { IPokemonData, IPokemonDataBasic, pokemonDataInitial } from '@/models/states.model';
import useFetch from '@/hooks/useFetch';
import { getPokemonDetail } from '@/services/pokemonLists.service';
import { pokemonDataAdapter } from '@/adapters/pokemonList.adapter';
export { default as PokemonCardLoading } from './PokemonCardLoading';
import PokemonCardLoading from './PokemonCardLoading';

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
      {loading && <PokemonCardLoading />}

      {!loading && id && (
        <div className="w-1/2 md:w-1/5 p-3" onClick={() => onClick(id)}>
          <div
            style={{ backgroundColor: colors.type[types[0].name] }}
            className={
              'p-2 relative overflow-hidden rounded-lg drop-shadow-md transition ease-in-out duration-300 cursor-pointer hover:-translate-y-2'
            }
          >
            <div className="flex items-center rounded-br-lg justify-center z-[3] absolute bg-black top-0 p-2 left-0 min-w-10 h-10">
              <h2 className="text-gray-light font-bold">{String(Number(id)).padStart(3, '0')}</h2>
            </div>
            <div className="w-full h-full bg-gradient-to-b from-gray-light to-white">
              <LazyImage
                className="w-4/5 h-40 md:h-56 m-auto object-contain relative z-[2] drop-shadow-lg"
                placeholder="/images/placeholder-image.png"
                src={images.frontDefault}
                alt={name}
              />
              <div className="w-full py-3">
                <h3 className="w-fit m-auto px-3 rounded-md font-bold text-center capitalize text-gray-light bg-black">
                  {name}
                </h3>
                <div className="flex w-full justify-center mt-2">
                  {!!types.length &&
                    types.map(({ name }, idx) => (
                      <div
                        className="rounded-md p-1 mx-1 drop-shadow-lg flex items-center"
                        style={{ backgroundColor: colors.type[name] }}
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
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default PokemonCard;
