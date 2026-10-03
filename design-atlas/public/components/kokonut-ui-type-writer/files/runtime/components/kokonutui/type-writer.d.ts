type TypewriterSequence = {
    text: string;
    deleteAfter?: boolean;
    pauseAfter?: number;
};
type TypewriterTitleProps = {
    sequences?: TypewriterSequence[];
    typingSpeed?: number;
    startDelay?: number;
    autoLoop?: boolean;
    loopDelay?: number;
    deleteSpeed?: number;
    pauseBeforeDelete?: number;
    naturalVariance?: boolean;
};
export default function TypewriterTitle({ sequences, typingSpeed, startDelay, autoLoop, loopDelay, deleteSpeed, pauseBeforeDelete, naturalVariance, }: TypewriterTitleProps): import("react").JSX.Element;
export {};
