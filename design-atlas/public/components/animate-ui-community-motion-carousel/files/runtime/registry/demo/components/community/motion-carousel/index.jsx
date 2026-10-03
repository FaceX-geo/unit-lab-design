'use client';
import * as React from 'react';
import { MotionCarousel } from '@/registry/components/community/motion-carousel';
export const MotionCarouselDemo = () => {
    const OPTIONS = { loop: true };
    const SLIDE_COUNT = 6;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
    return <MotionCarousel slides={SLIDES} options={OPTIONS}/>;
};
