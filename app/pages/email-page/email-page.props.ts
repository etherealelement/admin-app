import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface EmailPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    description: string;
}