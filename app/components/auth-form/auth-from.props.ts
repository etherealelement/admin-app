import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface IForm {
    password: string;
    username: string; 
}

export interface IFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>,HTMLFormElement> {
    titleForm: string;
    descriptionForm: string;
    type: "reg" | "login";
    buttonText: string;
    buttonTextGoogle: string;
    descriptionText: string;
    descriptionLink: string;
}