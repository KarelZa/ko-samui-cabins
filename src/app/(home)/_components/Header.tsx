'use client';

import { Logo } from '@/src/components/Logo';
import { Navigation } from '@/src/components/Navigation';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

export const Header: FC = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header
      className={
        isHome
          ? 'absolute left-0 top-0 z-50 w-full px-8 py-5'
          : 'relative z-50 w-full px-8 py-5 text-black shadow'
      }
    >
      <div className='mx-auto flex max-w-screen-xl items-center justify-between'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
