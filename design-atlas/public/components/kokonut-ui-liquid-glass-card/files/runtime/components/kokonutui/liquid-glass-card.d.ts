/**
 * @author: @dorianbaffier
 * @description: Liquid Glass Card - Optimized with Shadcn UI
 * @version: 2.0.0
 * @date: 2025-10-11
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */
import { type VariantProps } from "class-variance-authority";
import React from "react";
import { type ButtonProps } from "../ui/button";
declare const liquidButtonVariants: (props?: {
    liquidVariant?: "default" | "none";
} & import("class-variance-authority/types").ClassProp) => string;
export type LiquidButtonProps = ButtonProps & VariantProps<typeof liquidButtonVariants>;
declare function LiquidButton({ className, liquidVariant, children, ...props }: LiquidButtonProps): React.JSX.Element;
declare const liquidGlassCardVariants: (props?: {
    glassSize?: "default" | "sm" | "lg";
} & import("class-variance-authority/types").ClassProp) => string;
export type LiquidGlassCardProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof liquidGlassCardVariants> & {
    glassEffect?: boolean;
};
declare function LiquidGlassCard({ className, glassSize, glassEffect, children, ...props }: LiquidGlassCardProps): React.JSX.Element;
export declare function NotificationCenter(): React.JSX.Element;
export { LiquidButton, LiquidGlassCard };
export default NotificationCenter;
