import * as React from 'react';
import { type SwitchProps as SwitchPrimitiveProps } from '@/registry/primitives/radix/switch';
type SwitchProps = SwitchPrimitiveProps & {
    pressedWidth?: number;
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
    thumbIcon?: React.ReactElement;
};
declare function Switch({ className, pressedWidth, startIcon, endIcon, thumbIcon, ...props }: SwitchProps): React.JSX.Element;
export { Switch, type SwitchProps };
