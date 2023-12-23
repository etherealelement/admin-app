import { DetailedHTMLProps, HTMLAttributes } from "react";
import { inputType } from "../../register-form/config/config-form";

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    type: "email" | "job" | "password" | "text" | "tel";
    typeInput: inputType;
    size: "large" | "medium" | "small";
    placeholder: string;
    ref: any;
    nameField: string;
}
