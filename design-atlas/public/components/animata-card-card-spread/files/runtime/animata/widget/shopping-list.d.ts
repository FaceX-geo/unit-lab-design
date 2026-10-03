export type ShoppingListItem = {
    id: string;
    title: string;
    checked?: boolean;
};
export type ShoppingListProps = {
    className?: string;
    title?: string;
    items?: ShoppingListItem[];
};
export default function ShoppingList({ className, title, items, }: ShoppingListProps): import("react").JSX.Element;
