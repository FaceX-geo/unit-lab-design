interface TooltipDemoProps {
    openDelay?: number;
    closeDelay?: number;
    side?: 'top' | 'bottom' | 'left' | 'right';
    sideOffset?: number;
    align?: 'start' | 'center' | 'end';
    alignOffset?: number;
}
export declare const AnimateTooltipDemo: ({ openDelay, closeDelay, side, sideOffset, align, alignOffset, }: TooltipDemoProps) => import("react").JSX.Element;
export {};
