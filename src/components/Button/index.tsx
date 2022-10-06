import React from 'react';

const Button = ({ children, ...restProps }: any) => {
  return (
    <button
      {...restProps}
      className="h-12 drop-shadow-lg bg-black px-10 rounded-lg font-bold   transition ease-in-out duration-300 hover:scale-105"
    >
      {children}
    </button>
  );
};

export default Button;
