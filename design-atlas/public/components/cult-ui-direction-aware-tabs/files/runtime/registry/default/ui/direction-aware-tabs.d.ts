import { ReactNode } from "react";
type Tab = {
    id: number;
    label: string;
    content: ReactNode;
};
interface OgImageSectionProps {
    tabs: Tab[];
    className?: string;
    /** Outer container radius (e.g. `rounded-lg`) */
    rounded?: string;
    /** Inner tab/bubble radius — should be outer radius minus container padding (~3px) */
    roundedInner?: string;
    onChange?: () => void;
}
declare function DirectionAwareTabs({ tabs, className, rounded, roundedInner, onChange, }: OgImageSectionProps): import("react").JSX.Element;
export { DirectionAwareTabs };
