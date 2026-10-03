import React, { type ReactNode, type RefObject } from 'react';
import './ScrollReveal.css';
interface ScrollRevealProps {
    children: ReactNode;
    scrollContainerRef?: RefObject<HTMLElement>;
    enableBlur?: boolean;
    baseOpacity?: number;
    baseRotation?: number;
    blurStrength?: number;
    containerClassName?: string;
    textClassName?: string;
    rotationEnd?: string;
    wordAnimationEnd?: string;
}
declare const ScrollReveal: React.FC<ScrollRevealProps>;
export default ScrollReveal;
