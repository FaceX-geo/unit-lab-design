interface NavItem {
    name: string;
}
interface MorphicNavbarProps {
    items?: Record<string, NavItem>;
    defaultPath?: string;
    className?: string;
}
export declare function MorphicNavbar({ items, defaultPath, className, }: MorphicNavbarProps): import("react").JSX.Element;
export default MorphicNavbar;
