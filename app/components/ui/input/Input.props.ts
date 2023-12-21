import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    type: "email" | "job" | "password" | "text" | "tel";
    size: "large" | "medium" | "small";
    placeholder: string;
    ref: any;
    nameField: string;
}
