import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';


export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes <HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    type: "login" | "user"| "upgrade" | "plan" | "signup" | "google";
}