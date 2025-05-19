import { Hero } from '@/src/app/(home)/_components/hero/Hero';

export const metadata = {
  title: 'Home',
};

const Page = async () => {
  return (
    <div className='relative size-full'>
      <Hero />

      <section className='min-h-screen w-full bg-black text-white'>
        <h2 className='mb-4 text-4xl font-bold'>About Our Cabins</h2>
        <p className='text-lg'>
          Beautifully hand-crafted cabins nestled in pristine nature...
        </p>
      </section>
    </div>
  );
};

export default Page;
