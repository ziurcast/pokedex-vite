import React from 'react';

const Navbar = () => {
  return (
    <div className="z-50 bg-main drop-shadow-lg sticky top-0 backdrop-opacity-5">
      <div className="container flex items-center py-2 h-20">
        <img className="h-12" src="/svg/logo.svg" alt="pokemon" />
      </div>
    </div>
  );
};

export default Navbar;
