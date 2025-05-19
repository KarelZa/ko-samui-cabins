import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const Logo: FC = () => {
  return (
    <Link href='/' className='z-10 flex items-center gap-4'>
      <Image src='/logo.png' height='80' width='80' alt='Ko-Samui Cabins' />
      <span className='text-xl font-semibold text-primary-100'>
        Ko-Samui Cabins
      </span>
    </Link>
  );
};
