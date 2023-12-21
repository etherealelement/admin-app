import {createContext} from "react";

export const CheckboxContext = createContext<boolean>(false);
export const CheckboxContextHandler = createContext((v: boolean) => {} )