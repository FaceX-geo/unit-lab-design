import React from "react";
interface MagicCardBaseProps {
    children?: React.ReactNode;
    className?: string;
    gradientSize?: number;
    gradientFrom?: string;
    gradientTo?: string;
}
interface MagicCardGradientProps extends MagicCardBaseProps {
    mode?: "gradient";
    gradientColor?: string;
    gradientOpacity?: number;
    glowFrom?: never;
    glowTo?: never;
    glowAngle?: never;
    glowSize?: never;
    glowBlur?: never;
    glowOpacity?: never;
}
interface MagicCardOrbProps extends MagicCardBaseProps {
    mode: "orb";
    glowFrom?: string;
    glowTo?: string;
    glowAngle?: number;
    glowSize?: number;
    glowBlur?: number;
    glowOpacity?: number;
    gradientColor?: never;
    gradientOpacity?: never;
}
type MagicCardProps = MagicCardGradientProps | MagicCardOrbProps;
export declare function MagicCard(props: MagicCardProps): React.JSX.Element;
export {};
