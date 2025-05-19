import Link from 'next/link';
import React, { FC } from 'react';

export const Navigation: FC = () => {
  return (
    <nav className='z-10 text-xl'>
      <ul className='flex items-center gap-16'>
        <li>
          <Link
            href='/cabins'
            className='transition-colors hover:text-accent-400'
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className='transition-colors hover:text-accent-400'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href='/account'
            className='transition-colors hover:text-accent-400'
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
};
