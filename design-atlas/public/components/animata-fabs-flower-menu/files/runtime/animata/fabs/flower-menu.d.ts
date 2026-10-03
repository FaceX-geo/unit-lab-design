import type React from "react";
import "./flower-menu.css";
type MenuItem = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    href: string;
    /** Accessible name for the petal link. */
    label: string;
    key?: string;
};
interface FlowerMenuProps extends React.HTMLAttributes<HTMLElement> {
    menuItems: MenuItem[];
    iconColor?: string;
    backgroundColor?: string;
    /** Petal bloom duration in ms. @default 220 */
    animationDuration?: number;
    /** Center button diameter in px — use at least 44 for touch. @default 44 */
    togglerSize?: number;
    /** Gap between petal orbit and center, in px. @default 28 */
    petalGap?: number;
    /** Accessible name for the closed toggle. */
    triggerLabel?: string;
    /** Accessible name for the menu landmark. @default "Menu" */
    menuLabel?: string;
}
export default function FlowerMenu({ menuItems, iconColor, backgroundColor, animationDuration, togglerSize, petalGap, triggerLabel, menuLabel, className, ...props }: FlowerMenuProps): React.JSX.Element;
export {};
