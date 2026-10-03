import { type MotionValue } from "motion/react";
/**
 * The single state contract shared by every SmoothUI AI component.
 *
 * Passing the same value to an orb, a prompt input and a tool card makes the
 * whole surface move as one organism instead of a set of independent widgets.
 */
export type AIState = "idle" | "listening" | "thinking" | "streaming" | "done" | "error";
/**
 * A behavioural hint each component expresses **in its own material**.
 *
 * Deliberately not an overlay. Bolting one shared graphic onto every orb makes
 * four different materials look like the same widget wearing a costume, and it
 * pushes literal iconography (a checkmark, a warning ring) onto pieces that are
 * decorative by nature. Instead: a shader warps, a canvas ring loses harmonics,
 * a character changes expression. Same vocabulary, different flesh.
 */
export type AIStateMotif = "breathe" | "receive" | "scan" | "pulse" | "ping" | "fault";
/** Semantic accent applied on top of the component's own palette. */
export type AIStateAccent = "success" | "danger" | null;
/** Motion parameters a component reads to render a given {@link AIState}. */
export type AIStateMotion = {
    /** Semantic colour override, so status is carried by hue and not only motion. */
    accent: AIStateAccent;
    /** Outer bloom strength, 0–1. */
    glow: number;
    /** Palette hue rotation in degrees. Small shifts read as a mood change. */
    hueRotate: number;
    /** Overall motion energy, 0–1. Scales ambient loops and displacement. */
    intensity: number;
    /** Behavioural hint; each component expresses it in its own material. */
    motif: AIStateMotif;
    /** Seconds between discrete pulses, for rhythmic behaviour. */
    pulseSeconds: number;
    /**
     * How far a shader's domain warp pushes the field, 0–1. Low values read as a
     * calm surface; high values churn without the silhouette growing.
     */
    turbulence: number;
    /** Revolutions per second of the noise field — the slow tumble. */
    tumble: number;
    /** How much external amplitude reaches the surface, 0 = ignore it. */
    reactivity: number;
    /** Chroma multiplier. Below 1 desaturates. */
    saturation: number;
    /** Resting scale of the surface, 1 = no change. */
    scale: number;
    /** Ambient loop speed multiplier, 1 = the component's base tempo. */
    speed: number;
};
/**
 * Per-state presets.
 *
 * Deliberate choices worth keeping:
 * - `thinking` has `scale: 1` — internal churn only, so layout stays calm while
 *   the model works. Growing the surface here makes pages feel unstable.
 * - `error` desaturates instead of growing, so it reads as a state change
 *   rather than an attention grab.
 * - `done` overshoots once; components are expected to settle back to `idle`.
 * - Each state owns a distinct `motif`, so the six states are told apart by
 *   what moves, not by how fast it moves.
 */
export declare const AI_STATE_MOTION: Record<AIState, AIStateMotion>;
/** Semantic accents. Deliberately not tokens — orbs render outside a theme. */
export declare const AI_ACCENT_COLORS: Record<"success" | "danger", string>;
/**
 * Colour used by a state's overlay motif: the semantic accent when the state
 * has one, otherwise the component's own secondary colour.
 */
export declare const getAIStateAccentColor: (state: AIState | undefined, fallback: string) => string;
/** Motion preset for a state, falling back to `idle` for unknown values. */
export declare const getAIStateMotion: (state: AIState | undefined) => AIStateMotion;
/**
 * Amplitude accepted by every reactive AI component.
 *
 * A `MotionValue` is the preferred form: it updates outside React, so a 60fps
 * audio signal never triggers a re-render.
 */
export type AIAmplitude = number | MotionValue<number> | undefined;
/**
 * Normalises the `amplitude` prop into a stable `MotionValue<number>` so
 * component internals only deal with one shape.
 */
export declare const useAmplitudeValue: (amplitude: AIAmplitude) => MotionValue<number>;
export type AudioAmplitudeStatus = "idle" | "requesting" | "active" | "denied" | "unsupported";
export type UseAudioAmplitudeOptions = {
    /** Request microphone access as soon as the hook mounts. */
    autoStart?: boolean;
    /**
     * Envelope smoothing, 0–1. Higher is smoother and lazier; the default keeps
     * attack snappy so an orb reacts on the first syllable.
     */
    smoothing?: number;
    /** FFT size handed to the analyser node. Must be a power of two. */
    fftSize?: number;
};
export type UseAudioAmplitudeResult = {
    /** Smoothed RMS level, 0–1, as a `MotionValue`. */
    amplitude: MotionValue<number>;
    status: AudioAmplitudeStatus;
    start: () => Promise<void>;
    stop: () => void;
};
/**
 * Reads microphone loudness as a 0–1 `MotionValue`.
 *
 * SSR-safe, permission-aware, and silent on failure — a denied prompt leaves
 * the amplitude at 0 so the consuming component simply falls back to its
 * ambient animation.
 */
export declare const useAudioAmplitude: (options?: UseAudioAmplitudeOptions) => UseAudioAmplitudeResult;
/**
 * Amplitude generator for demos, docs and previews — no microphone involved.
 *
 * Produces a plausible speech-like envelope whose energy follows the current
 * {@link AIState}, so every example can show the reactive behaviour without
 * asking the visitor for permissions.
 */
export declare const useSimulatedAmplitude: (state?: AIState) => MotionValue<number>;
