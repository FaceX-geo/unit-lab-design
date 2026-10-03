import process from "process";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { siteConfig } from "@/config/site";
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export const pluralize = (count, word) => `${count} ${word}${count === 1 ? "" : "s"}`;
export function humanize(name) {
    return name
        .replace(/-/g, " ")
        .replace(/([A-Z])/g, " $1")
        .trim()
        .split(/\s+/)
        .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
        .join(" ");
}
export const truncate = (str, length) => {
    if (!str || str.length <= length)
        return str;
    return `${str.slice(0, length - 3)}...`;
};
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
/**
 * Capitalizes first letters of words in string.
 * @param {string} str String to be modified
 * @param {boolean=false} lower Whether all other letters should be lowercased
 * @return {string}
 * @see https://stackoverflow.com/questions/2332811/capitalize-words-in-string/7592235#7592235
 * @usage
 *   capitalize('fix this string');     // -> 'Fix This String'
 *   capitalize('javaSCrIPT');          // -> 'JavaSCrIPT'
 *   capitalize('javaSCrIPT', true);    // -> 'Javascript'
 */
export const capitalize = (str, lower = false) => (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());
export function formatDate(input) {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}
export const calculateReadingTime = (content) => {
    const words = content?.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
};
export const normalizeTag = (tag) => {
    if (!tag)
        return [];
    return Array.isArray(tag)
        ? tag.filter((t) => typeof t === "string")
        : [String(tag)];
};
const getBaseUrl = () => {
    const configuredUrl = process.env.NEXT_PUBLIC_APP_URL?.trim();
    if (!configuredUrl) {
        return siteConfig.url;
    }
    let url = configuredUrl.replace(/\/$/, "");
    if (!/^https?:\/\//i.test(url)) {
        url = `https://${url}`;
    }
    try {
        new URL(url);
        return url;
    }
    catch {
        return siteConfig.url;
    }
};
export function absoluteUrl(path) {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return new URL(normalizedPath, `${getBaseUrl()}/`).toString();
}
export function constructMetadata({ title = "Magic UI - Modern React + Tailwind CSS components & Templates", description = "Magic UI is a curated collection of the best landing page components built using React + Tailwind CSS + Motion", image = absoluteUrl("/og"), ...props }) {
    return {
        title,
        description,
        keywords: [
            "React",
            "Tailwind CSS",
            "Motion",
            "Landing Page",
            "Components",
            "Next.js",
        ],
        openGraph: {
            title,
            description,
            type: "website",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@dillionverma",
        },
        icons: "/favicon.ico",
        metadataBase: new URL("https://magicui.design"),
        authors: [
            {
                name: "dillionverma",
                url: "https://twitter.com/dillionverma",
            },
        ],
        creator: "dillionverma",
        ...props,
    };
}
