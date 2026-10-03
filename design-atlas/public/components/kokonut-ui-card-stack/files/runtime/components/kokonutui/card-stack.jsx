"use client";
/**
 * @author: @dorianbaffier
 * @description: Card Stack
 * @version: 1.1.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
const products = [
    {
        id: "instant-pay",
        title: "Quick Pay",
        subtitle: "Instant Transfers",
        description: "Move money in seconds with bank-grade security and zero surprises.",
        image: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22600%22%20viewBox%3D%220%200%20600%20600%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%23b2a5d4%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23382b51%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22600%22%20height%3D%22600%22%20fill%3D%22%23b2a5d4%22%2F%3E%3Ccircle%20cx%3D%22485%22%20cy%3D%2280%22%20r%3D%22200%22%20fill%3D%22%23fff%22%20opacity%3D%22.15%22%2F%3E%3Cpath%20d%3D%22M195%20330l55%2035%2085-90%22%20fill%3D%22none%22%20stroke%3D%22%23413056%22%20stroke-width%3D%2218%22%20stroke-linecap%3D%22round%22%2F%3E%3Ctext%20x%3D%2240%22%20y%3D%22550%22%20font-family%3D%22sans-serif%22%20font-size%3D%2218%22%20letter-spacing%3D%225%22%20fill%3D%22%2330253d%22%3EATLAS%20%2F%20OBJECT%2001%3C%2Ftext%3E%3C%2Fsvg%3E",
        specs: [
            { label: "Speed", value: "Instant" },
            { label: "Security", value: "256-bit" },
            { label: "Limit", value: "$50,000" },
            { label: "Fee", value: "0.5%" },
        ],
    },
    {
        id: "crypto-pay",
        title: "Crypto Pay",
        subtitle: "Web3 Payments",
        description: "Accept crypto across every major chain with optimized gas routing.",
        image: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22600%22%20viewBox%3D%220%200%20600%20600%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%23a9c9c0%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23382b51%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22600%22%20height%3D%22600%22%20fill%3D%22%23a9c9c0%22%2F%3E%3Ccircle%20cx%3D%22485%22%20cy%3D%2280%22%20r%3D%22200%22%20fill%3D%22%23fff%22%20opacity%3D%22.15%22%2F%3E%3Crect%20x%3D%2295%22%20y%3D%22180%22%20width%3D%22410%22%20height%3D%22240%22%20rx%3D%2224%22%20fill%3D%22%23242231%22%2F%3E%3Crect%20x%3D%22110%22%20y%3D%22195%22%20width%3D%22380%22%20height%3D%22205%22%20rx%3D%2214%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22300%22%20cy%3D%22310%22%20r%3D%2275%22%20fill%3D%22none%22%20stroke%3D%22%23e9b8a0%22%20stroke-width%3D%2220%22%2F%3E%3Ctext%20x%3D%2240%22%20y%3D%22550%22%20font-family%3D%22sans-serif%22%20font-size%3D%2218%22%20letter-spacing%3D%225%22%20fill%3D%22%2330253d%22%3EATLAS%20%2F%20OBJECT%2002%3C%2Ftext%3E%3C%2Fsvg%3E",
        specs: [
            { label: "Network", value: "Multi-chain" },
            { label: "Gas", value: "Optimized" },
            { label: "Support", value: "24/7" },
            { label: "Security", value: "Top-tier" },
        ],
    },
    {
        id: "business-pay",
        title: "Business Pay",
        subtitle: "Enterprise Solutions",
        description: "Built for high-volume teams with custom APIs and premium support.",
        image: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22600%22%20viewBox%3D%220%200%20600%20600%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%23e9b8a0%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23382b51%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22600%22%20height%3D%22600%22%20fill%3D%22%23e9b8a0%22%2F%3E%3Ccircle%20cx%3D%22485%22%20cy%3D%2280%22%20r%3D%22200%22%20fill%3D%22%23fff%22%20opacity%3D%22.15%22%2F%3E%3Crect%20x%3D%22180%22%20y%3D%22125%22%20width%3D%22240%22%20height%3D%22330%22%20rx%3D%2224%22%20fill%3D%22%23242231%22%2F%3E%3Crect%20x%3D%22195%22%20y%3D%22140%22%20width%3D%22210%22%20height%3D%22295%22%20rx%3D%2214%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22300%22%20cy%3D%22310%22%20r%3D%2275%22%20fill%3D%22none%22%20stroke%3D%22%23a8b6d4%22%20stroke-width%3D%2220%22%2F%3E%3Ctext%20x%3D%2240%22%20y%3D%22550%22%20font-family%3D%22sans-serif%22%20font-size%3D%2218%22%20letter-spacing%3D%225%22%20fill%3D%22%2330253d%22%3EATLAS%20%2F%20OBJECT%2003%3C%2Ftext%3E%3C%2Fsvg%3E",
        specs: [
            { label: "Volume", value: "Unlimited" },
            { label: "API", value: "REST/SDK" },
            { label: "Support", value: "Premium" },
            { label: "Features", value: "Custom" },
        ],
    },
    {
        id: "global-pay",
        title: "Global Pay",
        subtitle: "International Transfers",
        description: "Send to 180+ countries with real-time FX and same-day settlement.",
        image: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22600%22%20viewBox%3D%220%200%20600%20600%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%23a8b6d4%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23382b51%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22600%22%20height%3D%22600%22%20fill%3D%22%23a8b6d4%22%2F%3E%3Ccircle%20cx%3D%22485%22%20cy%3D%2280%22%20r%3D%22200%22%20fill%3D%22%23fff%22%20opacity%3D%22.15%22%2F%3E%3Crect%20x%3D%22180%22%20y%3D%22125%22%20width%3D%22240%22%20height%3D%22330%22%20rx%3D%2224%22%20fill%3D%22%23242231%22%2F%3E%3Crect%20x%3D%22195%22%20y%3D%22140%22%20width%3D%22210%22%20height%3D%22295%22%20rx%3D%2214%22%20fill%3D%22url(%23g)%22%2F%3E%3Ccircle%20cx%3D%22300%22%20cy%3D%22310%22%20r%3D%2275%22%20fill%3D%22none%22%20stroke%3D%22%23b2a5d4%22%20stroke-width%3D%2220%22%2F%3E%3Ctext%20x%3D%2240%22%20y%3D%22550%22%20font-family%3D%22sans-serif%22%20font-size%3D%2218%22%20letter-spacing%3D%225%22%20fill%3D%22%2330253d%22%3EATLAS%20%2F%20OBJECT%2004%3C%2Ftext%3E%3C%2Fsvg%3E",
        specs: [
            { label: "Countries", value: "180+" },
            { label: "FX Rate", value: "Real-time" },
            { label: "Speed", value: "Same-day" },
            { label: "Support", value: "Local" },
        ],
    },
];
const CARD_WIDTH = 320;
const CARD_OVERLAP = 240;
const Card = ({ product, index, totalCards, isExpanded, reducedMotion, }) => {
    const centerOffset = (totalCards - 1) * 5;
    const defaultX = index * 10 - centerOffset;
    const defaultY = index * 2;
    const defaultRotate = index * 1.5;
    const totalExpandedWidth = CARD_WIDTH + (totalCards - 1) * (CARD_WIDTH - CARD_OVERLAP);
    const expandedCenterOffset = totalExpandedWidth / 2;
    const spreadX = index * (CARD_WIDTH - CARD_OVERLAP) - expandedCenterOffset + CARD_WIDTH / 2;
    const spreadRotate = index * 5 - (totalCards - 1) * 2.5;
    const collapsedPose = {
        x: defaultX,
        y: defaultY,
        rotate: reducedMotion ? 0 : defaultRotate,
        scale: 1,
    };
    const expandedPose = {
        x: spreadX,
        y: 0,
        rotate: reducedMotion ? 0 : spreadRotate,
        scale: 1,
    };
    const isSvg = product.image.endsWith(".svg");
    return (<motion.div animate={{
            ...(isExpanded ? expandedPose : collapsedPose),
            zIndex: totalCards - index,
        }} className={cn("absolute inset-0 w-full rounded-2xl p-6", "bg-white/60 dark:bg-neutral-900/60", "border border-white/20 dark:border-neutral-800/40", "backdrop-blur-xl backdrop-saturate-150", "shadow-[0_8px_20px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_20px_rgb(0,0,0,0.3)]", "hover:border-white/30 dark:hover:border-neutral-700/30", "hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_12px_40px_rgb(0,0,0,0.4)]", "transition-[border-color,box-shadow] duration-300 ease-out", "transform-gpu overflow-hidden")} initial={collapsedPose} style={{
            maxWidth: `${CARD_WIDTH}px`,
            left: "50%",
            marginLeft: `-${CARD_WIDTH / 2}px`,
        }} transition={reducedMotion
            ? { duration: 0.2, ease: "easeOut" }
            : {
                type: "spring",
                stiffness: 220,
                damping: 28,
                mass: 1,
                delay: isExpanded ? index * 0.04 : 0,
            }}>
      <div className="relative z-10">
        <dl className="mb-4 grid grid-cols-4 justify-center gap-2">
          {product.specs.map((spec) => (<div className="flex flex-col items-start text-left text-[10px]" key={spec.label}>
              <dd className="w-full text-left font-medium text-gray-500 dark:text-gray-400">
                {spec.value}
              </dd>
              <dt className="mb-0.5 w-full text-left text-gray-900 dark:text-gray-100">
                {spec.label}
              </dt>
            </div>))}
        </dl>

        <div className={cn("relative aspect-[16/11] w-full overflow-hidden rounded-lg", "bg-neutral-100 dark:bg-neutral-900", "border border-neutral-200/50 dark:border-neutral-700/50", "shadow-inner")}>
          <Image alt={product.description} className="object-cover" fill sizes="320px" src={product.image} unoptimized={isSvg}/>
        </div>

        <div className="mt-4">
          <div className="space-y-1">
            <span className="block text-left font-bold text-3xl text-gray-900 tracking-tight dark:text-white">
              {product.title}
            </span>
            <span className="block text-left font-semibold text-3xl text-gray-500 tracking-tight dark:text-gray-400">
              {product.subtitle}
            </span>
          </div>
          <p className="mt-2 text-left text-gray-500 text-sm dark:text-gray-400">
            {product.description}
          </p>
        </div>
      </div>
    </motion.div>);
};
export default function CardStackExample({ className }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const reducedMotion = useReducedMotion() ?? false;
    const handleToggle = () => setIsExpanded((prev) => !prev);
    return (<button aria-expanded={isExpanded} aria-label={isExpanded ? "Collapse card stack" : "Expand card stack"} className={cn("relative mx-auto cursor-pointer", "min-h-[440px] w-full max-w-[90vw]", "md:max-w-[1200px]", "appearance-none border-0 bg-transparent p-0", "mb-8 flex items-center justify-center", className)} onClick={handleToggle} type="button">
      {products.map((product, index) => (<Card index={index} isExpanded={isExpanded} key={product.id} product={product} reducedMotion={reducedMotion} totalCards={products.length}/>))}
    </button>);
}
