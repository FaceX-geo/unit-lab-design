import { ReactNode } from "react";
import Matter from "matter-js";
type GravityProps = {
    children: ReactNode;
    debug?: boolean;
    gravity?: {
        x: number;
        y: number;
    };
    resetOnResize?: boolean;
    grabCursor?: boolean;
    addTopWall?: boolean;
    autoStart?: boolean;
    className?: string;
};
type MatterBodyProps = {
    children: ReactNode;
    matterBodyOptions?: Matter.IBodyDefinition;
    isDraggable?: boolean;
    bodyType?: "rectangle" | "circle" | "svg";
    sampleLength?: number;
    x?: number | string;
    y?: number | string;
    angle?: number;
    className?: string;
};
export type GravityRef = {
    start: () => void;
    stop: () => void;
    reset: () => void;
};
export declare const MatterBody: ({ children, className, matterBodyOptions, bodyType, isDraggable, sampleLength, x, y, angle, ...props }: MatterBodyProps) => import("react").JSX.Element;
declare const Gravity: import("react").ForwardRefExoticComponent<GravityProps & import("react").RefAttributes<GravityRef>>;
export default Gravity;
