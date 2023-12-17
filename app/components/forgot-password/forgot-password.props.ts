import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ForgotPasswordProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
   title: string;
   description: string;
}

export interface IForm {
   email: string;
}