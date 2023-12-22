import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RegisterFormInputsProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  labelName: string;
  placeholderName: string;
  typeInput: 'email' | 'job' | 'text' | 'password' | 'tel';
  fieldNameInput: string;
  register: any;
  configType:
    | 'email'
    | 'first_name'
    | 'last_name'
    | 'username'
    | 'phone'
    | 'password';
  sizeInput: 'small' | 'medium' | 'large';
  errors: any;
}
