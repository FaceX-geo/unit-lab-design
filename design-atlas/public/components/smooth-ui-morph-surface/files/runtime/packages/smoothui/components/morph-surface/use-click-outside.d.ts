import { type RefObject } from "react";
type EventType = "mousedown" | "mouseup" | "touchstart" | "touchend" | "focusin" | "focusout";
export declare function useClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T | null> | RefObject<T | null>[], handler: (event: Event) => void, eventType?: EventType): void;
export {};
