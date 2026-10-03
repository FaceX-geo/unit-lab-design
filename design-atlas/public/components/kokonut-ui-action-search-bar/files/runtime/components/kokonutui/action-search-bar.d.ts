interface Action {
    id: string;
    label: string;
    icon: React.ReactNode;
    description?: string;
    short?: string;
    end?: string;
}
declare function ActionSearchBar({ actions, defaultOpen, }: {
    actions?: Action[];
    defaultOpen?: boolean;
}): import("react").JSX.Element;
export default ActionSearchBar;
