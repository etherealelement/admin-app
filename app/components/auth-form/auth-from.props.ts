import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface IForm {
    email: string;
    password: string;
}

export interface IFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>,HTMLFormElement> {
    titleForm: string;
    descriptionForm: string;
    type: "reg" | "login";
}