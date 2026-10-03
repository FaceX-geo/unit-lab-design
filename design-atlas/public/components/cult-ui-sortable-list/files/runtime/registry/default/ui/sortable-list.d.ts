import { Dispatch, ReactNode, SetStateAction } from "react";
export type Item = {
    text: string;
    checked: boolean;
    id: number;
    description: string;
};
interface SortableListItemProps {
    item: Item;
    order: number;
    onCompleteItem: (id: number) => void;
    onRemoveItem: (id: number) => void;
    renderExtra?: (item: Item) => React.ReactNode;
    isExpanded?: boolean;
    className?: string;
    handleDrag: () => void;
}
declare function SortableListItem({ item, order, onCompleteItem, onRemoveItem, renderExtra, handleDrag, isExpanded, className, }: SortableListItemProps): import("react").JSX.Element;
declare namespace SortableListItem {
    var displayName: string;
}
interface SortableListProps {
    items: Item[];
    setItems: Dispatch<SetStateAction<Item[]>>;
    onCompleteItem: (id: number) => void;
    renderItem: (item: Item, order: number, onCompleteItem: (id: number) => void, onRemoveItem: (id: number) => void) => ReactNode;
}
declare function SortableList({ items, setItems, onCompleteItem, renderItem, }: SortableListProps): import("react").JSX.Element;
declare namespace SortableList {
    var displayName: string;
}
export { SortableList, SortableListItem };
export default SortableList;
