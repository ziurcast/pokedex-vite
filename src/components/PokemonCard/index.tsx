import React from 'react';
import tailwind from '../../../tailwind';
import LazyImage from '@/components/LazyImage';
import { IPokemonDataBasic } from '@/models/states.model';
export { default as PokemonCardLoading } from './PokemonCardLoading';

interface Props {
  data: IPokemonDataBasic;
}

const PokemonCard = ({ data }: Props) => {
  const {
    theme: { colors },
  }: any = tailwind;
  const { images, name, types, id } = data;

  return (
    <div className="w-1/2 md:w-1/5 p-2">
      <div
        style={{ backgroundColor: colors.type[types[0].name] }}
        className={
          'p-2 h-80 relative overflow-hidden rounded-lg transition ease-in-out duration-300 drop-shadow-lg cursor-pointer hover:scale-105 hover:-translate-y-1'
        }
      >
        <div className="flex items-center rounded-br-lg justify-center absolute bg-black top-0 p-2 left-0 min-w-10 h-10">
          <h2 className="text-silver font-bold">{String(id).padStart(3, '0')}</h2>
        </div>
        <div className="bg-silver w-full h-full">
          <LazyImage
            className="w-4/5 h-56 m-auto object-contain"
            placeholder="/images/placeholder-image.png"
            src={images.frontDefault}
            alt={name}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
