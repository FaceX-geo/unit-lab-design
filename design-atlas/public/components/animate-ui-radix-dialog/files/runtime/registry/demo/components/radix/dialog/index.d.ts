import * as React from 'react';
import { type DialogContentProps } from '@/registry/components/radix/dialog';
interface RadixDialogDemoProps {
    from: DialogContentProps['from'];
    showCloseButton: boolean;
}
export declare const RadixDialogDemo: ({ from, showCloseButton, }: RadixDialogDemoProps) => React.JSX.Element;
export {};
