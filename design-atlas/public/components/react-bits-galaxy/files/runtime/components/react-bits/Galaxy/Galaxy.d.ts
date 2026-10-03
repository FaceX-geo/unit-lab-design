import './Galaxy.css';
interface GalaxyProps {
    focal?: [number, number];
    rotation?: [number, number];
    starSpeed?: number;
    density?: number;
    hueShift?: number;
    disableAnimation?: boolean;
    speed?: number;
    mouseInteraction?: boolean;
    glowIntensity?: number;
    saturation?: number;
    mouseRepulsion?: boolean;
    twinkleIntensity?: number;
    rotationSpeed?: number;
    repulsionStrength?: number;
    autoCenterRepulsion?: number;
    transparent?: boolean;
    lightMode?: boolean;
}
export default function Galaxy({ focal, rotation, starSpeed, density, hueShift, disableAnimation, speed, mouseInteraction, glowIntensity, saturation, mouseRepulsion, repulsionStrength, twinkleIntensity, rotationSpeed, autoCenterRepulsion, transparent, lightMode, ...rest }: GalaxyProps): import("react").JSX.Element;
export {};
