import { type ReactNode } from "react";
import useMeasure from "react-use-measure";
import { Drawer } from "vaul";
type ViewComponent = React.ComponentType<Record<string, unknown>>;
interface ViewsRegistry {
    [viewName: string]: ViewComponent;
}
interface FamilyDrawerContextValue {
    isOpen: boolean;
    view: string;
    setView: (view: string) => void;
    opacityDuration: number;
    elementRef: ReturnType<typeof useMeasure>[0];
    bounds: ReturnType<typeof useMeasure>[1];
    views: ViewsRegistry | undefined;
}
declare function useFamilyDrawer(): FamilyDrawerContextValue;
interface FamilyDrawerRootProps {
    children: ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    defaultView?: string;
    onViewChange?: (view: string) => void;
    views?: ViewsRegistry;
}
declare function FamilyDrawerRoot({ children, open: controlledOpen, defaultOpen, onOpenChange, defaultView, onViewChange, views: customViews, }: FamilyDrawerRootProps): import("react").JSX.Element;
interface FamilyDrawerTriggerProps {
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}
declare function FamilyDrawerTrigger({ children, asChild, className, }: FamilyDrawerTriggerProps): import("react").JSX.Element;
declare function FamilyDrawerPortal({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
interface FamilyDrawerOverlayProps {
    className?: string;
    onClick?: () => void;
}
declare function FamilyDrawerOverlay({ className, onClick }: FamilyDrawerOverlayProps): import("react").JSX.Element;
interface FamilyDrawerContentProps {
    children: ReactNode;
    className?: string;
    asChild?: boolean;
}
declare function FamilyDrawerContent({ children, className, asChild, }: FamilyDrawerContentProps): import("react").JSX.Element;
interface FamilyDrawerAnimatedWrapperProps {
    children: ReactNode;
    className?: string;
}
declare function FamilyDrawerAnimatedWrapper({ children, className, }: FamilyDrawerAnimatedWrapperProps): import("react").JSX.Element;
interface FamilyDrawerAnimatedContentProps {
    children: ReactNode;
}
declare function FamilyDrawerAnimatedContent({ children, }: FamilyDrawerAnimatedContentProps): import("react").JSX.Element;
interface FamilyDrawerCloseProps {
    children?: ReactNode;
    asChild?: boolean;
    className?: string;
}
declare function FamilyDrawerClose({ children, asChild, className, }: FamilyDrawerCloseProps): import("react").JSX.Element;
type FamilyDrawerTitleProps = React.ComponentProps<typeof Drawer.Title>;
/**
 * Accessible title for the drawer. Every view must render one (directly or via
 * `FamilyDrawerHeader`) so screen readers can announce the dialog.
 */
declare function FamilyDrawerTitle({ className, ...props }: FamilyDrawerTitleProps): import("react").JSX.Element;
type FamilyDrawerDescriptionProps = React.ComponentProps<typeof Drawer.Description>;
declare function FamilyDrawerDescription({ className, ...props }: FamilyDrawerDescriptionProps): import("react").JSX.Element;
interface FamilyDrawerHeaderProps {
    icon: ReactNode;
    title: string;
    description: string;
    className?: string;
}
declare function FamilyDrawerHeader({ icon, title, description, className, }: FamilyDrawerHeaderProps): import("react").JSX.Element;
interface FamilyDrawerButtonProps {
    children: ReactNode;
    onClick: () => void;
    className?: string;
    asChild?: boolean;
}
declare function FamilyDrawerButton({ children, onClick, className, asChild, }: FamilyDrawerButtonProps): import("react").JSX.Element;
interface FamilyDrawerSecondaryButtonProps {
    children: ReactNode;
    onClick: () => void;
    className: string;
    asChild?: boolean;
}
declare function FamilyDrawerSecondaryButton({ children, onClick, className, asChild, }: FamilyDrawerSecondaryButtonProps): import("react").JSX.Element;
interface FamilyDrawerViewContentProps {
    views?: ViewsRegistry;
}
declare function FamilyDrawerViewContent({ views: propViews, }?: FamilyDrawerViewContentProps): import("react").JSX.Element;
export { FamilyDrawerRoot, FamilyDrawerTrigger, FamilyDrawerPortal, FamilyDrawerOverlay, FamilyDrawerContent, FamilyDrawerAnimatedWrapper, FamilyDrawerAnimatedContent, FamilyDrawerClose, FamilyDrawerHeader, FamilyDrawerTitle, FamilyDrawerDescription, FamilyDrawerButton, FamilyDrawerSecondaryButton, FamilyDrawerViewContent, useFamilyDrawer, type ViewsRegistry, type ViewComponent, };
