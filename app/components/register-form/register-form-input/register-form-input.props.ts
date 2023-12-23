import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { inputType } from '../config/config-form';

export interface RegisterFormInputsProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
    type: "email" | "job" | "password" | "text" | "tel";
  labelName: string;
  placeholderName: string;
  typeInput: inputType;
  fieldNameInput: string;
  configType:
    | 'email'
    | 'first_name'
    | 'last_name'
    | 'username'
    | 'phone'
    | 'password';
  sizeInput: 'small' | 'medium' | 'large';
}
