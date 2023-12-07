import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface SidebarInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    data: string;
    onChange: () => void;
}