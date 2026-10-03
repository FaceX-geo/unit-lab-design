import * as React from 'react';
import { type TooltipProviderProps as TooltipProviderPrimitiveProps, type TooltipProps as TooltipPrimitiveProps, type TooltipTriggerProps as TooltipTriggerPrimitiveProps, type TooltipContentProps as TooltipContentPrimitiveProps } from '../../primitives/animate/tooltip';
type TooltipProviderProps = TooltipProviderPrimitiveProps;
declare function TooltipProvider({ openDelay, ...props }: TooltipProviderProps): React.JSX.Element;
type TooltipProps = TooltipPrimitiveProps;
declare function Tooltip({ sideOffset, ...props }: TooltipProps): React.JSX.Element;
type TooltipTriggerProps = TooltipTriggerPrimitiveProps;
declare function TooltipTrigger({ ...props }: TooltipTriggerProps): React.JSX.Element;
type TooltipContentProps = Omit<TooltipContentPrimitiveProps, 'asChild'> & {
    children: React.ReactNode;
    layout?: boolean | 'position' | 'size' | 'preserve-aspect';
};
declare function TooltipContent({ className, children, layout, ...props }: TooltipContentProps): React.JSX.Element;
export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, type TooltipProviderProps, type TooltipProps, type TooltipTriggerProps, type TooltipContentProps, };
