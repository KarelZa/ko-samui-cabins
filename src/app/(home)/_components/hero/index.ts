import { MotionValue } from 'framer-motion';
import { StaticImageData } from 'next/image';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';

export type Tab = {
  key: string;
  label: string;
  image: StaticImageData;
  icon: React.ElementType;
};

export type HeroProps = {
  containerRef: MutableRefObject<null>;
  tabRefs: MutableRefObject<Record<string, HTMLDivElement | null>>;
  currentImage: StaticImageData;
  previousImage: StaticImageData;
  handleHover: (key: string) => void;
  currentTab: string;
  prevTab: string | null;
  setPrevTab: Dispatch<SetStateAction<string | null>>;
  opacity: MotionValue<number>;
  indicatorStyle: {
    left: number;
    width: number;
  };
};
