import React from "react";
import { ValueAnimationTransition } from "motion/react";
interface ElasticLineProps {
    isVertical?: boolean;
    grabThreshold?: number;
    releaseThreshold?: number;
    strokeWidth?: number;
    transition?: ValueAnimationTransition;
    animateInTransition?: ValueAnimationTransition;
    className?: string;
}
declare const ElasticLine: React.FC<ElasticLineProps>;
export default ElasticLine;
