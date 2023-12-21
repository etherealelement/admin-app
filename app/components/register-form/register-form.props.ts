import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface IRegisterForm {
    email: string;
    username: string;
    password: string;
    first_name: string
    last_name: string;
    phone: string;
}

export interface IRegisterFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>,HTMLFormElement> {
    titleForm: string;
    descriptionForm: string;
    buttonText: string;
    buttonTextGoogle: string;
    descriptionText: string;
    descriptionLink: string;
}