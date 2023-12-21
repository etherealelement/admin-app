import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';

export type ButtonStatement =  "login" | "user"| "upgrade" | "plan" | "signup" | "google" | "disable";

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes <HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    type: ButtonStatement;
}