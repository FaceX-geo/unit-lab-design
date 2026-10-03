/**
 * @author: @dorianbaffier
 * @description: Smooth Tab
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */
import type { LucideIcon } from "lucide-react";
import * as React from "react";
interface TabItem {
    id: string;
    title: string;
    description?: string;
    icon?: LucideIcon;
    content?: React.ReactNode;
    cardContent?: React.ReactNode;
    color: string;
}
interface SmoothTabProps {
    items?: TabItem[];
    defaultTabId?: string;
    className?: string;
    activeColor?: string;
    onChange?: (tabId: string) => void;
}
export default function SmoothTab({ items, defaultTabId, className, activeColor, onChange, }: SmoothTabProps): React.JSX.Element;
export {};
