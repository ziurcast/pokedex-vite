import React from 'react';

const LoadingFullScreen = () => {
  return (
    <div className="fixed flex place-content-center items-center top-0 left-0 right-0 bottom-0">
      <div className="animate-bounce">
        <img className="w-20" src="/images/pokeball.png" alt="Pokeball" />
      </div>
    </div>
  );
};

export default LoadingFullScreen;
