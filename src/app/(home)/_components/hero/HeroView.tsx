'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { tabData } from '@/src/app/(home)/_components/hero/useHero';
import { HeroProps } from '@/src/app/(home)/_components/hero';

export const HeroView: FC<HeroProps> = ({
  containerRef,
  tabRefs,
  currentImage,
  previousImage,
  currentTab,
  prevTab,
  indicatorStyle,
  opacity,
  handleHover,
  setPrevTab,
}) => {
  return (
    <section
      ref={containerRef}
      className='relative h-screen w-screen overflow-hidden bg-black'
    >
      {/* Background Images */}
      <div className='absolute inset-0 z-0'>
        {/* Previous stays visible */}
        <Image
          src={previousImage}
          fill
          placeholder='blur'
          quality={80}
          className='object-cover object-center transition-none'
          alt='Previous background'
        />

        {/* Fade in new image over previous */}
        {currentTab !== prevTab && (
          <motion.div
            key={currentTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            onAnimationComplete={() => setPrevTab(currentTab)}
            className='absolute inset-0'
          >
            <Image
              src={currentImage}
              fill
              placeholder='blur'
              quality={80}
              className='object-cover object-center transition-none'
              alt='New background'
              priority
            />
          </motion.div>
        )}
      </div>

      {/* Shadows */}
      <div className='pointer-events-none absolute left-0 right-0 top-0 z-10 h-32 bg-gradient-to-b from-black/70 to-transparent' />
      <div className='pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-64 bg-gradient-to-t from-black to-transparent' />

      <div className='absolute inset-0 z-10 flex items-center px-28'>
        <motion.div style={{ opacity }} className='-translate-y-20'>
          <h1 className='pacifico mb-7 text-7xl tracking-tight text-primary-50'>
            Join us in paradise
          </h1>
          <Button asChild variant='outline'>
            <Link href='/cabins'>Explore luxury cabins</Link>
          </Button>
        </motion.div>
      </div>

      <div className='absolute bottom-24 z-10 flex w-full justify-center gap-2'>
        <motion.div style={{ opacity }} className='relative mt-6'>
          <div className='absolute left-0 right-0 top-0 h-px bg-white/20' />
          <motion.div
            layout
            className='absolute top-0 h-[2px] rounded-full bg-white'
            animate={indicatorStyle}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ zIndex: 10 }}
          />
          <div className='relative z-10 flex gap-6 pt-2'>
            {tabData.map(({ key, label, icon: Icon }) => (
              <div
                key={key}
                ref={(el) => {
                  tabRefs.current[key] = el;
                }}
                onMouseEnter={() => handleHover(key)}
                className='flex cursor-pointer flex-col items-center gap-1 text-primary-50'
              >
                <div className='mt-3 flex w-32 flex-col items-center gap-3 text-sm opacity-90 transition hover:opacity-100'>
                  <Icon size={24} />
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
