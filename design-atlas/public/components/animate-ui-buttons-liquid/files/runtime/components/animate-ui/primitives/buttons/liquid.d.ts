import * as React from 'react';
import { type HTMLMotionProps } from 'motion/react';
import { type WithAsChild } from '../animate/slot';
type LiquidButtonProps = WithAsChild<HTMLMotionProps<'button'> & {
    delay?: string;
    fillHeight?: string;
    hoverScale?: number;
    tapScale?: number;
}>;
declare function LiquidButton({ delay, fillHeight, hoverScale, tapScale, asChild, ...props }: LiquidButtonProps): React.JSX.Element;
export { LiquidButton, type LiquidButtonProps };
