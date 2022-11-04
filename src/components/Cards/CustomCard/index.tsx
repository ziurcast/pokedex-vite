import React, { HTMLAttributes, Fragment } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  children?: JSX.Element | JSX.Element[] | string | string[];
  bgColor?: string;
  animate?: boolean;
  loading?: boolean;
  loadingSpinner?: boolean;
}

const CustomCard = ({
  children,
  bgColor,
  className,
  loading = false,
  animate = true,
  loadingSpinner = true,
  ...divProps
}: Props) => {
  return (
    <Fragment>
      {!loading ? (
        <div
          style={{ backgroundColor: bgColor }}
          className={`p-2 overflow-hidden rounded-lg drop-shadow-md cursor-pointer ${className} ${
            animate && 'transition ease-in-out duration-300 hover:-translate-y-2'
          }`}
          {...divProps}
        >
          <div className="w-full h-full bg-gradient-to-b from-silver to-white">{children}</div>
        </div>
      ) : (
        <div
          className={`animate-pulse p-2 h-72 bg-gradient-to-b from-silver to-white flex items-center justify-center rounded-lg drop-shadow-lg ${className}`}
          {...divProps}
        >
          {loadingSpinner && (
            <div className="animate-bounce">
              <img className="w-16" src="/images/pokeball.png" alt="Pokeball" />
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default CustomCard;
