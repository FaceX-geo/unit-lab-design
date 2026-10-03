import type { ReactNode } from "react";
export type NotesCardProps = {
    className?: string;
    title?: string;
    children?: ReactNode;
};
export declare function NotesCard({ className, title, children }: NotesCardProps): import("react").JSX.Element;
export type NotesProps = {
    className?: string;
    title?: string;
    lines?: string[];
};
export default function Notes({ className, title, lines, }: NotesProps): import("react").JSX.Element;
