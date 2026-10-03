import React from 'react';
import './Threads.css';
interface ThreadsProps {
    color?: [number, number, number];
    amplitude?: number;
    distance?: number;
    enableMouseInteraction?: boolean;
}
declare const Threads: React.FC<ThreadsProps>;
export default Threads;
