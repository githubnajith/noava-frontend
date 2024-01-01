'use client';
import {useState, useEffect} from 'react';
import MobilenavLinks from './2.mobile/MobileNavLinks';
// -----------------------------------------------
export default function CombineHeader({children}: {children: React.ReactNode}) {
  // there is issue in hiding mobile menu thats why this code snippet is here
  const [mobileClick, setMobileClick] = useState<boolean>();
  const getData = (mobileState: boolean) => {
    setMobileClick(mobileState);
  };
  // ---------------------------------------------------
  const [scrollDirection, setScrollDirection] = useState<string>('');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < 10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  // -------------------------------------------------------------
  return (
    <>
      {/*1. pc navlink */}
      <div
        className={`hidden z-50 lg:block sticky duration-200 top-0 ${
          scrollDirection === 'down' ? 'opacity-0 pointer-events-none' : 'opacity-1 pointer-events-auto'
        }`}
      >
        {children}
      </div>
      {/* 2.mobile menu */}
      <div
        className={`lg:hidden sticky z-50 top-0 duration-200 ${
          scrollDirection === 'down' && !mobileClick ? 'opacity-0 pointer-events-none' : 'opacity-1 pointer-events-auto'
        }`}
      >
        <MobilenavLinks getData={getData} />
      </div>
    </>
  );
}
