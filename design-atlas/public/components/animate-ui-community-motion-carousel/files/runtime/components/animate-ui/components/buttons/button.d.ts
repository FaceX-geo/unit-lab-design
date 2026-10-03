import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { type ButtonProps as ButtonPrimitiveProps } from '../../primitives/buttons/button';
declare const buttonVariants: (props?: {
    variant?: "link" | "default" | "outline" | "accent" | "destructive" | "secondary" | "ghost";
    size?: "default" | "icon" | "sm" | "lg" | "icon-sm" | "icon-lg";
} & import("class-variance-authority/types").ClassProp) => string;
type ButtonProps = ButtonPrimitiveProps & VariantProps<typeof buttonVariants>;
declare function Button({ className, variant, size, ...props }: ButtonProps): React.JSX.Element;
export { Button, buttonVariants, type ButtonProps };
