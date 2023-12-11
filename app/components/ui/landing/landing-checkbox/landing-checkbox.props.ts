import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LandingCheckboxProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  text?: string;
}
