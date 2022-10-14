import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="z-40 bg-main drop-shadow-lg sticky top-0 backdrop-opacity-5">
      <div className="container flex justify-between items-center py-2 h-16">
        <div>
          <img
            alt="pokemon"
            src="/svg/logo.svg"
            className="h-10 cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>
        <div className="flex gap-x-3">
          <img alt="pokemon" src="/images/linkedin-logo-white.png" className="h-6 cursor-pointer" />
          <img alt="pokemon" src="/images/github-logo-white.png" className="h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
