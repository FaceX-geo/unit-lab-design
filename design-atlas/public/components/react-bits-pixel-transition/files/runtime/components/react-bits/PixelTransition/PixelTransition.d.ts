import React, { type CSSProperties } from 'react';
import './PixelTransition.css';
interface PixelTransitionProps {
    firstContent: React.ReactNode | string;
    secondContent: React.ReactNode | string;
    gridSize?: number;
    pixelColor?: string;
    animationStepDuration?: number;
    once?: boolean;
    className?: string;
    style?: CSSProperties;
    aspectRatio?: string;
}
declare const PixelTransition: React.FC<PixelTransitionProps>;
export default PixelTransition;
