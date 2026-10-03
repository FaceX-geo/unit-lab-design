import { type AIAmplitude, type AIState } from "../ai-core";
export interface SiriOrbProps {
    /**
     * Live audio level, 0–1. Pass the `MotionValue` from `useAudioAmplitude` so
     * the signal never re-renders React.
     */
    amplitude?: AIAmplitude;
    /** Ambient rotation period in seconds, before the state speed multiplier. */
    animationDuration?: number;
    className?: string;
    colors?: {
        bg?: string;
        c1?: string;
        c2?: string;
        c3?: string;
        /** Fourth mesh stop. More stops means fewer visible repeats per rotation. */
        c4?: string;
    };
    size?: string;
    /** Shared AI state driving speed, scale, saturation and reactivity. */
    state?: AIState;
}
declare const SiriOrb: React.FC<SiriOrbProps>;
export default SiriOrb;
