import type React from "react";
interface SwipeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    firstText: string;
    secondText: string;
    className?: string;
    firstClass?: string;
    secondClass?: string;
}
export default function SwipeButton({ className, secondText, firstText, firstClass, secondClass, ...props }: SwipeButtonProps): React.JSX.Element;
export {};
