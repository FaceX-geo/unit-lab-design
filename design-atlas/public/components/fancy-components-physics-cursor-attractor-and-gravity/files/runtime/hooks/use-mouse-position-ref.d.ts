import { RefObject } from "react";
export declare const useMousePositionRef: (containerRef?: RefObject<HTMLElement | SVGElement | null>) => RefObject<{
    x: number;
    y: number;
}>;
