import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const buttonVariants: (props?: {
    variant?: "link" | "outline" | "default" | "accent" | "neutral" | "destructive" | "secondary" | "ghost";
    size?: "default" | "icon" | "sm" | "md" | "lg" | "icon-sm" | "icon-xs";
} & import("class-variance-authority/types").ClassProp) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): React.JSX.Element;
export { Button, buttonVariants };
