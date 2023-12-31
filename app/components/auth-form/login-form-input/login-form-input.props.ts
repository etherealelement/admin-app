import { DetailedHTMLProps, HTMLAttributes } from "react";
import { inputType } from "../config/config-form";

export interface RegisterFormInputsProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type: "email" | "password" | "username"| "text",
  labelName: string;
  placeholderName: string;
  typeInput: inputType;
  fieldNameInput: string;
  configType: "email" | "password" | "username" | "text";
  sizeInput: 'small' | 'medium' | 'large';
}