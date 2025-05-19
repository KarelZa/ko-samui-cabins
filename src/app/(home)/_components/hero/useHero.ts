import { HeroProps, Tab } from '@/src/app/(home)/_components/hero';
import { useScroll, useTransform } from 'framer-motion';
import { CalendarHeart, Home, MountainSnow, Utensils } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';
import bgHome from '@/public/bg.jpg';
import cuisine from '@/public/cuisine.jpg';

export const tabData: Tab[] = [
  { key: 'cabins', label: 'Luxury Cabins', icon: Home, image: bgHome },
  { key: 'cuisine', label: 'Cuisine', icon: Utensils, image: cuisine },
  {
    key: 'adventures',
    label: 'Adventures',
    icon: MountainSnow,
    image: cuisine,
  },
  { key: 'spa', label: 'Spa & Wellness', icon: Home, image: cuisine },
  { key: 'events', label: 'Events', icon: CalendarHeart, image: cuisine },
];

export const useHero = (): HeroProps => {
  const containerRef = useRef(null);
  const tabRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [currentTab, setCurrentTab] = useState('cabins');
  const [prevTab, setPrevTab] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const handleHover = (key: string) => {
    if (key !== currentTab) {
      setPrevTab(currentTab);
      setCurrentTab(key);
    }
  };

  const currentImage = tabData.find((t) => t.key === currentTab)!.image;
  const previousImage = tabData.find(
    (t) => t.key === (prevTab || currentTab),
  )!.image;

  useLayoutEffect(() => {
    if (currentTab && tabRefs.current[currentTab]) {
      const el = tabRefs.current[currentTab];
      const rect = el!.getBoundingClientRect();
      const parentRect = el!.parentElement!.getBoundingClientRect();
      setIndicatorStyle({
        left: rect.left - parentRect.left,
        width: rect.width,
      });
    }
  }, [currentTab]);

  return {
    containerRef,
    tabRefs,
    currentImage,
    previousImage,
    handleHover,
    currentTab,
    prevTab,
    setPrevTab,
    opacity,
    indicatorStyle,
  };
};
