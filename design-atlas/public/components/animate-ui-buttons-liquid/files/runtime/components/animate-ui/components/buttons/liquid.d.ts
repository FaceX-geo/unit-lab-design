import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { type LiquidButtonProps as LiquidButtonPrimitiveProps } from '../../primitives/buttons/liquid';
declare const buttonVariants: (props?: {
    variant?: "default" | "destructive" | "secondary" | "ghost";
    size?: "default" | "icon" | "sm" | "lg" | "icon-sm" | "icon-lg";
} & import("class-variance-authority/types").ClassProp) => string;
type LiquidButtonProps = LiquidButtonPrimitiveProps & VariantProps<typeof buttonVariants>;
declare function LiquidButton({ className, variant, size, ...props }: LiquidButtonProps): React.JSX.Element;
export { LiquidButton, buttonVariants, type LiquidButtonProps };
