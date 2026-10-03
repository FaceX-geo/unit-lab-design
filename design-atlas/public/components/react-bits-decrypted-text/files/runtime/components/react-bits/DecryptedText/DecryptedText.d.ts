import type { HTMLMotionProps } from 'motion/react';
interface DecryptedTextProps extends HTMLMotionProps<'span'> {
    text: string;
    speed?: number;
    maxIterations?: number;
    sequential?: boolean;
    revealDirection?: 'start' | 'end' | 'center';
    useOriginalCharsOnly?: boolean;
    characters?: string;
    className?: string;
    parentClassName?: string;
    encryptedClassName?: string;
    animateOn?: 'view' | 'hover' | 'inViewHover' | 'click';
    clickMode?: 'once' | 'toggle';
}
export default function DecryptedText({ text, speed, maxIterations, sequential, revealDirection, useOriginalCharsOnly, characters, className, parentClassName, encryptedClassName, animateOn, clickMode, ...props }: DecryptedTextProps): import("react").JSX.Element;
export {};
