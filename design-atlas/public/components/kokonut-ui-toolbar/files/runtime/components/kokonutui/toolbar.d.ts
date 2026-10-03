/**
 * @author: @dorianbaffier
 * @description: Toolbar
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */
import { type LucideIcon } from "lucide-react";
import * as React from "react";
interface ToolbarItem {
    id: string;
    title: string;
    icon: LucideIcon;
    type?: never;
}
interface ToolbarProps {
    items?: ToolbarItem[];
    defaultSelected?: string;
    className?: string;
    activeColor?: string;
    onSelect?: (itemId: string) => void;
}
export declare function Toolbar({ items, defaultSelected, className, activeColor, onSelect, }: ToolbarProps): React.JSX.Element;
export default Toolbar;
