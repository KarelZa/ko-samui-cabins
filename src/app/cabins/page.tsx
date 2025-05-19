import { UserList } from '@/src/components/UserList';
import React from 'react';

export const metadata = {
  title: 'Cabins',
};

const Page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return (
    <div>
      <h2>CABINS</h2>
    </div>
  );
};

export default Page;
