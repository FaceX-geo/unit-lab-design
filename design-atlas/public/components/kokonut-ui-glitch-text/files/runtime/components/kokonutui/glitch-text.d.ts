interface GlitchTextProps {
    text: string;
    className?: string;
    glitchIntensity?: "light" | "medium" | "heavy" | "extreme";
    color?: "rainbow" | "blue" | "purple" | "cyan" | "pink" | "orange" | "gradient-orange";
    backgroundColor?: string;
    isStatic?: boolean;
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | number;
    fontWeight?: number;
    letterSpacing?: number;
}
declare const GlitchText: ({ text, className, glitchIntensity, color, backgroundColor, isStatic, size, fontWeight, letterSpacing, }: GlitchTextProps) => import("react").JSX.Element;
export default GlitchText;
