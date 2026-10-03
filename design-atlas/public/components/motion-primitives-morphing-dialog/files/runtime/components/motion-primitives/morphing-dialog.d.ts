import React from 'react';
import { Transition, Variant } from 'motion/react';
export type MorphingDialogContextType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    uniqueId: string;
    triggerRef: React.RefObject<HTMLButtonElement | null>;
};
export type MorphingDialogProviderProps = {
    children: React.ReactNode;
    transition?: Transition;
};
export type MorphingDialogProps = {
    children: React.ReactNode;
    transition?: Transition;
};
declare function MorphingDialog({ children, transition }: MorphingDialogProps): React.JSX.Element;
export type MorphingDialogTriggerProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    triggerRef?: React.RefObject<HTMLButtonElement>;
};
declare function MorphingDialogTrigger({ children, className, style, triggerRef, }: MorphingDialogTriggerProps): React.JSX.Element;
export type MorphingDialogContentProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};
declare function MorphingDialogContent({ children, className, style, }: MorphingDialogContentProps): React.JSX.Element;
export type MorphingDialogContainerProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};
declare function MorphingDialogContainer({ children }: MorphingDialogContainerProps): React.ReactPortal;
export type MorphingDialogTitleProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};
declare function MorphingDialogTitle({ children, className, style, }: MorphingDialogTitleProps): React.JSX.Element;
export type MorphingDialogSubtitleProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};
declare function MorphingDialogSubtitle({ children, className, style, }: MorphingDialogSubtitleProps): React.JSX.Element;
export type MorphingDialogDescriptionProps = {
    children: React.ReactNode;
    className?: string;
    disableLayoutAnimation?: boolean;
    variants?: {
        initial: Variant;
        animate: Variant;
        exit: Variant;
    };
};
declare function MorphingDialogDescription({ children, className, variants, disableLayoutAnimation, }: MorphingDialogDescriptionProps): React.JSX.Element;
export type MorphingDialogImageProps = {
    src: string;
    alt: string;
    className?: string;
    style?: React.CSSProperties;
};
declare function MorphingDialogImage({ src, alt, className, style, }: MorphingDialogImageProps): React.JSX.Element;
export type MorphingDialogCloseProps = {
    children?: React.ReactNode;
    className?: string;
    variants?: {
        initial: Variant;
        animate: Variant;
        exit: Variant;
    };
};
declare function MorphingDialogClose({ children, className, variants, }: MorphingDialogCloseProps): React.JSX.Element;
export { MorphingDialog, MorphingDialogTrigger, MorphingDialogContainer, MorphingDialogContent, MorphingDialogClose, MorphingDialogTitle, MorphingDialogSubtitle, MorphingDialogDescription, MorphingDialogImage, };
