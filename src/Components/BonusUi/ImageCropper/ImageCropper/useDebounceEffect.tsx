import { useEffect } from "react";

export const useDebounceEffect = (fn: () => void, waitTime: number, deps?: any) => {
  useEffect(() => {
    const t = setTimeout(() => {
      fn.apply(undefined, deps);
    }, waitTime);

    return () => {
      clearTimeout(t);
    };
  }, deps);
};
