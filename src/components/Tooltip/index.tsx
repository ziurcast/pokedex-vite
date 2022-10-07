import React, { useState, useMemo } from 'react';

interface Props {
  message: string;
  bgColor: string;
  pos?: 'top' | 'bottom' | 'right' | 'left';
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Tooltip = ({ children, message, bgColor, pos }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  const position = useMemo(() => {
    switch (pos) {
      case 'bottom':
        return ' top-full left-1/2 transform -translate-x-1/2';
      case 'left':
        return ' right-full top-1/2 transform -translate-y-1/2';
      case 'right':
        return ' left-full top-1/2 transform -translate-y-1/2';
      default:
        return ' bottom-full left-1/2 transform -translate-x-1/2';
    }
  }, [pos]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show && (
        <div
          style={{ backgroundColor: bgColor }}
          className={`${position} px-2 py-0.5 m-0.5 z-10 absolute text-xs bg-black shadow-lg capitalize text-white rounded-md font-small`}
        >
          {message}
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
