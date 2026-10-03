import * as React from 'react';
import { type AccordionProps as AccordionPrimitiveProps, type AccordionItemProps as AccordionItemPrimitiveProps, type AccordionTriggerProps as AccordionTriggerPrimitiveProps, type AccordionContentProps as AccordionContentPrimitiveProps } from '../../primitives/radix/accordion';
type AccordionProps = AccordionPrimitiveProps;
declare function Accordion(props: AccordionProps): React.JSX.Element;
type AccordionItemProps = AccordionItemPrimitiveProps;
declare function AccordionItem({ className, ...props }: AccordionItemProps): React.JSX.Element;
type AccordionTriggerProps = AccordionTriggerPrimitiveProps & {
    showArrow?: boolean;
};
declare function AccordionTrigger({ className, children, showArrow, ...props }: AccordionTriggerProps): React.JSX.Element;
type AccordionContentProps = AccordionContentPrimitiveProps;
declare function AccordionContent({ className, children, ...props }: AccordionContentProps): React.JSX.Element;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent, type AccordionProps, type AccordionItemProps, type AccordionTriggerProps, type AccordionContentProps, };
