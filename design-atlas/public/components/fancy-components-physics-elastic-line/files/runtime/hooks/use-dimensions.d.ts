import { RefObject } from "react";
interface Dimensions {
    width: number;
    height: number;
}
export declare function useDimensions(ref: RefObject<HTMLElement | SVGElement | null>): Dimensions;
export {};
