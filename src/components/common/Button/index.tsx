import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Button = ({ children, ...buttonProps }: Props) => {
  return (
    <button
      {...buttonProps}
      className="h-12 drop-shadow-lg bg-black px-10 rounded-lg font-bold   transition ease-in-out duration-300 hover:scale-105"
    >
      {children}
    </button>
  );
};

export default Button;
