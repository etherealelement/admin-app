import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LandingInputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholderText: string;
}

export interface EmailForm {
  email: string;
}
