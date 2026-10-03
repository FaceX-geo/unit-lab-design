import React, { type CSSProperties, type ReactNode } from 'react';
import './SwipeRow.css';
export interface SwipeAction {
    id: string;
    label: string;
    icon?: ReactNode;
    color?: string;
    dismiss?: boolean;
    onSelect?: () => void;
}
export interface SwipeRowProps {
    children?: ReactNode;
    actions?: SwipeAction[];
    actionColor?: string;
    drawerColor?: string;
    rowColor?: string;
    textColor?: string;
    height?: number;
    radius?: number;
    actionWidth?: number;
    direction?: 'left' | 'right';
    snapBounce?: number;
    resistance?: number;
    collapseMs?: number;
    commitAt?: number;
    fullSwipe?: boolean;
    disabled?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    onAction?: (action: SwipeAction) => void;
    onCommit?: (action: SwipeAction) => void;
    closeOnAction?: boolean;
    haptic?: boolean;
    label?: string;
    className?: string;
    style?: CSSProperties;
}
declare const SwipeRow: React.FC<SwipeRowProps>;
export default SwipeRow;
