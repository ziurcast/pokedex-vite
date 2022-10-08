import React from 'react';

const PokemonCardLoading = () => {
  return (
    <div className="animate-pulse w-1/2 md:w-1/5 p-2">
      <div
        className={
          'p-2 h-80 bg-gradient-to-b from-gray-light to-white flex items-center justify-center rounded-lg drop-shadow-lg'
        }
      >
        <div className="animate-bounce">
          <img className="w-16" src="/images/pokeball.png" alt="Pokeball" />
        </div>
      </div>
    </div>
  );
};

export default PokemonCardLoading;
