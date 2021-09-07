import { useEffect, useRef } from 'react';

const useKey = (key: string, cb: () => void) => {
  const callbackRef = useRef<(e: object) => void>(cb);

  useEffect(() => {
    callbackRef.current = cb;
  });

  useEffect(() => {
    const handle = (e: { code: string }) => {
      e.code === key && callbackRef.current(e);
    };

    document.addEventListener('keydown', handle);
    return () => {
      document.removeEventListener('keydown', handle);
    };
  }, [key]);
};

export default useKey;


