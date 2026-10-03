import * as React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
type PropType = {
    slides: number[];
    options?: EmblaOptionsType;
};
declare function MotionCarousel(props: PropType): React.JSX.Element;
export { MotionCarousel };
