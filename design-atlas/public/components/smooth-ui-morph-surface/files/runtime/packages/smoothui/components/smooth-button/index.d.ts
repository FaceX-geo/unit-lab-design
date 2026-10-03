import { type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";
/**
 * SmoothButton — the first primitive of the SmoothUI Design System.
 *
 * Three orthogonal axes (see design-system/components/button.md):
 *   variant → appearance only (solid | soft | outline | ghost | link | candy)
 *   color   → hue (accent | neutral | destructive | blue | amber | green)
 *   size    → xs | sm | default | lg + icon-*
 *
 * The `color` axis only sets CSS custom props (--btn, --btn-hover, --btn-fg);
 * each `variant` consumes them generically, so 6 variants × 6 colors stay 12
 * class strings, not 36. When no `color` is given, CSS var fallbacks apply
 * (candy → brand, everything else → neutral/foreground).
 *
 * Legacy variants `default` / `secondary` / `destructive` are preserved verbatim
 * for back-compat with existing call sites and ignore the `color` axis.
 */
declare const smoothButtonVariants: (props?: {
    color?: "accent" | "amber" | "blue" | "destructive" | "green" | "neutral";
    shape?: "default" | "pill" | "square";
    size?: "default" | "icon" | "icon-lg" | "icon-sm" | "lg" | "sm" | "xs";
    variant?: "default" | "destructive" | "candy" | "ghost" | "link" | "outline" | "secondary" | "soft" | "solid";
} & import("class-variance-authority/types").ClassProp) => string;
export type SmoothButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "prefix" | "color"> & VariantProps<typeof smoothButtonVariants> & {
    asChild?: boolean;
    /** Show a spinner that morphs the button width without layout jump. */
    loading?: boolean;
    /** Content before the label (icon, Kbd…). */
    prefix?: ReactNode;
    /** Content after the label. */
    suffix?: ReactNode;
    /** Opt-in Safari force-press depth (scales to 0.94 under pressure). */
    forcePress?: boolean;
    ref?: Ref<HTMLButtonElement>;
};
declare function SmoothButton({ className, variant, color, size, shape, asChild, loading, forcePress, prefix, suffix, disabled, children, ref, ...props }: SmoothButtonProps): import("react").JSX.Element;
export default SmoothButton;
export { smoothButtonVariants };
