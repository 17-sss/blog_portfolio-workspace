import { useCallback, useEffect, useState } from 'react';
import { throttle } from 'utils/functions';

const useisHeaderTop = function (delay: number = 100) {
  const [isHeaderTop, setIsHeaderTop] = useState<boolean>(false);
  const [timer, setTimer] = useState<number | null>(null);

  const handleScroll = useCallback(() => setIsHeaderTop(() => window.scrollY === 0), []);
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', throttle({ timer, setTimer, fn: handleScroll, delay }));
    return () => window.removeEventListener('scroll', throttle({ timer, setTimer, fn: handleScroll, delay }));
  }, [handleScroll, delay]);

  return isHeaderTop;
};

export default useisHeaderTop;
