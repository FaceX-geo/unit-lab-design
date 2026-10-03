import * as React from "react";
interface Profile {
    name: string;
    email: string;
    avatar: string;
    subscription?: string;
    model?: string;
}
interface ProfileDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    data?: Profile;
    showTopbar?: boolean;
}
export default function ProfileDropdown({ data, className, ...props }: ProfileDropdownProps): React.JSX.Element;
export {};
