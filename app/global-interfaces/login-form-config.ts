import { inputType } from "../components/register-form/config/config-form";

export interface ILoginFormConfig {
      type: "email" | "password" | "username" | "text";
      id: number;
      name: string,
      configType: "email" | "password" | "username" | "text",
      errors?: any,
      fieldNameInput: string,
      placeholderName: string,
      sizeInput:  "small" | "medium" | "large",
      typeInput: inputType,
}
