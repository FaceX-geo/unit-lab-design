import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import { siteConfig } from "@/config/site";
const twMerge = extendTailwindMerge({
    extend: {
        classGroups: {
            shadow: [{ shadow: ["soft-sm", "soft", "soft-md"] }],
        },
    },
});
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export function absoluteUrl(path) {
    return `${siteConfig.url}${path}`;
}
