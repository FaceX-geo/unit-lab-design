import type { ReactNode } from "react";
import React from "react";
import type { GlobalOptions as ConfettiGlobalOptions, Options as ConfettiOptions } from "canvas-confetti";
import { Button } from "../ui/button";
export type ConfettiRef = {
    fire: (options?: ConfettiOptions) => Promise<void> | void;
};
type Props = React.ComponentPropsWithRef<"canvas"> & {
    options?: ConfettiOptions;
    globalOptions?: ConfettiGlobalOptions;
    manualstart?: boolean;
    children?: ReactNode;
};
export declare const Confetti: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<ConfettiRef>>;
export interface ConfettiButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
    options?: ConfettiOptions & ConfettiGlobalOptions & {
        canvas?: HTMLCanvasElement;
    };
}
export declare const ConfettiButton: React.ForwardRefExoticComponent<ConfettiButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
