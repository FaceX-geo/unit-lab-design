import type { ButtonProps } from "../ui/button";
interface ParticleButtonProps extends ButtonProps {
    onSuccess?: () => void;
    successDuration?: number;
}
export default function ParticleButton({ children, onClick, onSuccess, successDuration, className, ...props }: ParticleButtonProps): import("react").JSX.Element;
export {};
