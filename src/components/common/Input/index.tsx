import React, { SVGProps, InputHTMLAttributes } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  loadig?: boolean;
  cleaneable?: boolean;
  onClean?: () => void;
}

const Input = ({ Icon, loadig, cleaneable, onClean, ...inputProps }: Props) => {
  return (
    <div className="w-72 relative">
      <input
        {...inputProps}
        className="h-12 w-full py-2 pr-3 pl-4 rounded-lg bg-white border border-gray-mid outline-none transition ease-in-out delay-200 focus:border-gray-dark"
      />
      {Icon && !loadig && (cleaneable ? !inputProps.value : true) && (
        <Icon className="w-6 absolute top-1/2 right-3 -translate-y-1/2 text-gray-mid" />
      )}
      {cleaneable && !loadig && inputProps.value && (
        <XMarkIcon
          onClick={onClean}
          className="w-6 absolute top-1/2 right-3 -translate-y-1/2 text-gray-mid cursor-pointer hover:text-gray-dark"
        />
      )}
      {loadig && (
        <div className="animate-spin w-6 absolute top-1/4 right-3 text-gray-mid">
          <img src="/images/pokeball.png" alt="|" />
        </div>
      )}
    </div>
  );
};

export default Input;
