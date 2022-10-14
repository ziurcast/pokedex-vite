import React from 'react';

const Footer = () => {
  return (
    <div className="h-32 bg-main drop-shadow-md">
      <div className="h-full container flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <img className="w-12" src="/images/ziurcast-logo.png" alt="ziurcast" />
          <img className="h-8" src="/images/pokeapi-logo.png" alt="ziurcast" />
        </div>
        <p className="text-silver text-sm">Copyright 2022</p>
      </div>
    </div>
  );
};

export default Footer;
