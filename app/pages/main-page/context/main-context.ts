import { createContext } from 'react';

// search by name;
export const InputSearchValueContext = createContext("");
export const InputSearchValueHandlerContext = createContext((data: string) => {});