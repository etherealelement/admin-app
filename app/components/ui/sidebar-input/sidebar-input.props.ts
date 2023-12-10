import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface SidebarInputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    name: string;
}