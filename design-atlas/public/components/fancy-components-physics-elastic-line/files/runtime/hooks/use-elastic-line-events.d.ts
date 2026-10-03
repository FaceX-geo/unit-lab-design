interface ElasticLineEvents {
    isGrabbed: boolean;
    controlPoint: {
        x: number;
        y: number;
    };
}
export declare function useElasticLineEvents(containerRef: React.RefObject<SVGSVGElement | null>, isVertical: boolean, grabThreshold: number, releaseThreshold: number): ElasticLineEvents;
export {};
