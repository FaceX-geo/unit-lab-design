import { Transition, Variant, MotionProps } from 'motion/react';
export type TransitionPanelProps = {
    children: React.ReactNode[];
    className?: string;
    transition?: Transition;
    activeIndex: number;
    variants?: {
        enter: Variant;
        center: Variant;
        exit: Variant;
    };
} & MotionProps;
export declare function TransitionPanel({ children, className, transition, variants, activeIndex, ...motionProps }: TransitionPanelProps): import("react").JSX.Element;
