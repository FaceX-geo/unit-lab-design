import { type ReactNode, type Ref } from "react";
export type SwipeDirection = "left" | "right";
export interface CardSwipeDeckItem {
    content: ReactNode;
    id: string;
}
export interface CardSwipeDeckLabels {
    left?: string;
    right?: string;
}
export interface CardSwipeDeckHandle {
    reset: () => void;
    swipeLeft: () => void;
    swipeRight: () => void;
}
export interface CardSwipeDeckProps {
    className?: string;
    disabled?: boolean;
    items: CardSwipeDeckItem[];
    /** Stamp copy burned into the top corners, e.g. `{ left: "Nope", right: "Like" }`. */
    labels?: CardSwipeDeckLabels;
    onEmpty?: () => void;
    onSwipe?: (id: string, direction: SwipeDirection) => void;
    ref?: Ref<CardSwipeDeckHandle>;
    /** Max rotation (degrees) applied at the edge of the drag range. */
    rotationFactor?: number;
    /** Vertical offset (px) applied to each receding card in the stack. */
    stackOffset?: number;
    /** How many cards are visible in the stack, front card included. */
    stackSize?: number;
    /** Drag distance (px) required to commit a swipe. */
    threshold?: number;
}
export default function CardSwipeDeck({ className, disabled, items, labels, onEmpty, onSwipe, ref, rotationFactor, stackOffset, stackSize, threshold, }: CardSwipeDeckProps): import("react").JSX.Element;
