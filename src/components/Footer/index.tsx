import React from 'react';

const Footer = () => {
  return (
    <div className="h-36 bg-black rounded-t-2xl drop-shadow-md">
      <div className="h-full container flex justify-between items-center">
        <img className="w-12" src="/images/ziurcast-logo.png" alt="ziurcast" />
        <p className="text-silver text-sm">Copyright 2022</p>
      </div>
    </div>
  );
};

export default Footer;
