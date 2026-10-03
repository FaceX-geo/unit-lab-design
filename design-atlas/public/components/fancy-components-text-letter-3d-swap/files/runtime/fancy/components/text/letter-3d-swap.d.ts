import React, { ElementType } from "react";
import { AnimationOptions, ValueAnimationTransition } from "motion/react";
interface Letter3DSwapProps {
    /**
     * The content to be displayed and animated
     */
    children: React.ReactNode;
    /**
     * HTML Tag to render the component as
     */
    as?: ElementType;
    /**
     * Class name for the main container element.
     */
    mainClassName?: string;
    /**
     * Class name for the front face element.
     */
    frontFaceClassName?: string;
    /**
     * Class name for the secondary face element.
     */
    secondFaceClassName?: string;
    /**
     * Duration of stagger delay between elements in seconds.
     * @default 0.05
     */
    staggerDuration?: number;
    /**
     * Direction to stagger animations from.
     * @default "first"
     */
    staggerFrom?: "first" | "last" | "center" | number | "random";
    /**
     * Animation transition configuration.
     * @default { type: "spring", damping: 25, stiffness: 300 }
     */
    transition?: ValueAnimationTransition | AnimationOptions;
    /**
     * Direction of rotation
     * @default "right"
     */
    rotateDirection?: "top" | "right" | "bottom" | "left";
}
declare const Letter3DSwap: {
    ({ children, as, mainClassName, frontFaceClassName, secondFaceClassName, staggerDuration, staggerFrom, transition, rotateDirection, ...props }: Letter3DSwapProps): React.JSX.Element;
    displayName: string;
};
export default Letter3DSwap;
