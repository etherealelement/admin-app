import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface CreateNewPasswordProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    description: string;
}