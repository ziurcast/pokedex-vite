import React from 'react';

const PokemonCardLoading = () => {
  return (
    <div className="animate-pulse w-64">
      <div
        className={
          'p-2 h-72 bg-gradient-to-b from-silver to-white flex items-center justify-center rounded-lg drop-shadow-lg'
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
