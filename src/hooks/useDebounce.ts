import { useRef } from 'react';

export function useDebounce(fn: any, delay: number) {
  const timeOutRef = useRef(1);

  function debouncedFn(...args: any[]) {
    window.clearTimeout(timeOutRef.current);
    timeOutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debouncedFn;
}
