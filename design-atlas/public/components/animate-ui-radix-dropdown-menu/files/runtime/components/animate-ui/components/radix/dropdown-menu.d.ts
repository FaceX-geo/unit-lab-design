import * as React from 'react';
import { type DropdownMenuProps as DropdownMenuPrimitiveProps, type DropdownMenuContentProps as DropdownMenuContentPrimitiveProps, type DropdownMenuGroupProps as DropdownMenuGroupPrimitiveProps, type DropdownMenuItemProps as DropdownMenuItemPrimitiveProps, type DropdownMenuCheckboxItemProps as DropdownMenuCheckboxItemPrimitiveProps, type DropdownMenuRadioGroupProps as DropdownMenuRadioGroupPrimitiveProps, type DropdownMenuRadioItemProps as DropdownMenuRadioItemPrimitiveProps, type DropdownMenuLabelProps as DropdownMenuLabelPrimitiveProps, type DropdownMenuSeparatorProps as DropdownMenuSeparatorPrimitiveProps, type DropdownMenuShortcutProps as DropdownMenuShortcutPrimitiveProps, type DropdownMenuSubProps as DropdownMenuSubPrimitiveProps, type DropdownMenuSubContentProps as DropdownMenuSubContentPrimitiveProps, type DropdownMenuSubTriggerProps as DropdownMenuSubTriggerPrimitiveProps, type DropdownMenuTriggerProps as DropdownMenuTriggerPrimitiveProps } from '@/registry/primitives/radix/dropdown-menu';
type DropdownMenuProps = DropdownMenuPrimitiveProps;
declare function DropdownMenu(props: DropdownMenuProps): React.JSX.Element;
type DropdownMenuTriggerProps = DropdownMenuTriggerPrimitiveProps;
declare function DropdownMenuTrigger(props: DropdownMenuTriggerProps): React.JSX.Element;
type DropdownMenuContentProps = DropdownMenuContentPrimitiveProps;
declare function DropdownMenuContent({ sideOffset, className, children, ...props }: DropdownMenuContentProps): React.JSX.Element;
type DropdownMenuGroupProps = DropdownMenuGroupPrimitiveProps;
declare function DropdownMenuGroup({ ...props }: DropdownMenuGroupProps): React.JSX.Element;
type DropdownMenuItemProps = DropdownMenuItemPrimitiveProps & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
};
declare function DropdownMenuItem({ className, inset, variant, disabled, ...props }: DropdownMenuItemProps): React.JSX.Element;
type DropdownMenuCheckboxItemProps = DropdownMenuCheckboxItemPrimitiveProps;
declare function DropdownMenuCheckboxItem({ className, children, checked, disabled, ...props }: DropdownMenuCheckboxItemProps): React.JSX.Element;
type DropdownMenuRadioGroupProps = DropdownMenuRadioGroupPrimitiveProps;
declare function DropdownMenuRadioGroup(props: DropdownMenuRadioGroupProps): React.JSX.Element;
type DropdownMenuRadioItemProps = DropdownMenuRadioItemPrimitiveProps;
declare function DropdownMenuRadioItem({ className, children, disabled, ...props }: DropdownMenuRadioItemProps): React.JSX.Element;
type DropdownMenuLabelProps = DropdownMenuLabelPrimitiveProps & {
    inset?: boolean;
};
declare function DropdownMenuLabel({ className, inset, ...props }: DropdownMenuLabelProps): React.JSX.Element;
type DropdownMenuSeparatorProps = DropdownMenuSeparatorPrimitiveProps;
declare function DropdownMenuSeparator({ className, ...props }: DropdownMenuSeparatorProps): React.JSX.Element;
type DropdownMenuShortcutProps = DropdownMenuShortcutPrimitiveProps;
declare function DropdownMenuShortcut({ className, ...props }: DropdownMenuShortcutProps): React.JSX.Element;
type DropdownMenuSubProps = DropdownMenuSubPrimitiveProps;
declare function DropdownMenuSub(props: DropdownMenuSubProps): React.JSX.Element;
type DropdownMenuSubTriggerProps = DropdownMenuSubTriggerPrimitiveProps & {
    inset?: boolean;
};
declare function DropdownMenuSubTrigger({ disabled, className, inset, children, ...props }: DropdownMenuSubTriggerProps): React.JSX.Element;
type DropdownMenuSubContentProps = DropdownMenuSubContentPrimitiveProps;
declare function DropdownMenuSubContent({ className, ...props }: DropdownMenuSubContentProps): React.JSX.Element;
export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, type DropdownMenuProps, type DropdownMenuTriggerProps, type DropdownMenuContentProps, type DropdownMenuGroupProps, type DropdownMenuItemProps, type DropdownMenuCheckboxItemProps, type DropdownMenuRadioGroupProps, type DropdownMenuRadioItemProps, type DropdownMenuLabelProps, type DropdownMenuSeparatorProps, type DropdownMenuShortcutProps, type DropdownMenuSubProps, type DropdownMenuSubTriggerProps, type DropdownMenuSubContentProps, };
