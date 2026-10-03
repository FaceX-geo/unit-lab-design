import './Aurora.css';
interface AuroraProps {
    colorStops?: string[];
    amplitude?: number;
    blend?: number;
    time?: number;
    speed?: number;
    lightMode?: boolean;
}
export default function Aurora(props: AuroraProps): import("react").JSX.Element;
export {};
