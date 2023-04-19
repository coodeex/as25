import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop() {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef(null);

  useLayoutEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      const timeout = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);
      return () => clearTimeout(timeout);
    }
    prevPathnameRef.current = pathname;
  }, [pathname]);
}
