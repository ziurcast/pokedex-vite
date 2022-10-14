import React from 'react';

const Footer = () => {
  return (
    <div className="h-36 bg-main drop-shadow-md">
      <div className="h-full container flex justify-between items-center">
        <img className="w-12" src="/images/ziurcast-logo-white.png" alt="ziurcast" />
        <p className="text-silver text-sm">Copyright 2022</p>
      </div>
    </div>
  );
};

export default Footer;
