import { useEffect, useRef } from 'react';

const useEffectOnce = (callback: Function, condition: boolean) => {
  const isCalledRef = useRef(false);

  useEffect(() => {
    if (condition && !isCalledRef.current) {
      isCalledRef.current = true;
      callback();
    }
  }, [callback, condition]);
};

export default useEffectOnce;
