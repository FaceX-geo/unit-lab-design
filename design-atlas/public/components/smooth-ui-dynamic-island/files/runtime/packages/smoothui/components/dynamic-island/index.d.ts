import { type ReactNode } from "react";
type View = "idle" | "ring" | "timer" | "notification" | "music";
export interface DynamicIslandProps {
    className?: string;
    idleContent?: ReactNode;
    onViewChange?: (view: View) => void;
    ringContent?: ReactNode;
    timerContent?: ReactNode;
    view?: View;
}
export default function DynamicIsland({ view: controlledView, onViewChange, idleContent, ringContent, timerContent, className, }: DynamicIslandProps): import("react").JSX.Element;
export {};
