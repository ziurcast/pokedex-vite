import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="z-40 bg-main drop-shadow-lg sticky top-0 backdrop-opacity-5">
      <div className="container flex items-center py-2 h-16">
        <img
          alt="pokemon"
          src="/svg/logo.svg"
          className="h-10 cursor-pointer"
          onClick={() => navigate('/')}
        />
      </div>
    </div>
  );
};

export default Navbar;
