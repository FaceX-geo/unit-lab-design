import type { Metadata } from "next";
import { type ClassValue } from "clsx";
export declare function cn(...inputs: ClassValue[]): string;
export declare const pluralize: (count: number, word: string) => string;
export declare function humanize(name: string): string;
export declare const truncate: (str: string | null, length: number) => string;
export declare const fetcher: (...args: Parameters<typeof fetch>) => Promise<any>;
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
export declare const capitalize: (str: string, lower?: boolean) => string;
export declare function formatDate(input: string | number): string;
export declare const calculateReadingTime: (content: string) => number;
export declare const normalizeTag: (tag: unknown) => string[];
export declare function absoluteUrl(path: string): string;
export declare function constructMetadata({ title, description, image, ...props }: {
    title?: string;
    description?: string;
    image?: string;
    [key: string]: Metadata[keyof Metadata];
}): Metadata;
