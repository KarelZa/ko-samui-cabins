'use client';
import { HeroView } from '@/src/app/(home)/_components/hero/HeroView';
import { useHero } from '@/src/app/(home)/_components/hero/useHero';
import { wrap } from '@/src/app/utils/globalUtils';

export const Hero = wrap(HeroView, useHero);
