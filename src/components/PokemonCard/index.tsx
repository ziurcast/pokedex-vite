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
  const { images, name, types, id, height, weight, baseExperience } = data;

  return (
    <div className="w-1/2 md:w-1/5 p-2">
      <div
        style={{ backgroundColor: colors.type[types[0].name] }}
        className={
          'p-2 h-80 relative overflow-hidden rounded-lg transition ease-in-out duration-300 drop-shadow-lg cursor-pointer hover:scale-105 hover:-translate-y-1'
        }
      >
        <div className="flex items-center rounded-br-lg justify-center z-[3] absolute bg-black top-0 p-2 left-0 min-w-10 h-10">
          <h2 className="text-gray-light font-bold">{String(id).padStart(3, '0')}</h2>
        </div>
        <div className="w-full relative h-full bg-gradient-to-b from-silver to-gray-light">
          <LazyImage
            className="w-4/5 h-56 m-auto object-contain relative z-[2]"
            placeholder="/images/placeholder-image.png"
            src={images.frontDefault}
            alt={name}
          />
          <div className="w-full relative z-[2]">
            <h3 className="w-fit m-auto px-3 rounded-xl mt-2 font-bold text-center capitalize text-gray-light bg-black">
              {name}
            </h3>
            <p className="m-auto w-fit mt-2 text-sm">
              <span>
                <b>{Number(height) / 10}</b> m
              </span>
              <span className="border-r mx-2"></span>
              <span>
                <b>{Number(weight) / 10}</b> kg
              </span>
              <span className="border-r mx-2"></span>
              <span>
                <b>{baseExperience}</b> Exp
              </span>
            </p>
          </div>
          <div className="bg-gradient-to-b from-silver absolute w-full h-1/2 bottom-0"></div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
