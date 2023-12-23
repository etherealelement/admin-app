import { inputType } from "../components/register-form/config/config-form";

export interface IRegisterFormConfig {
      type: "email" | "job" | "password" | "text" | "tel";
      id: number;
      name: string,
      configType: "email" | "username" | "phone" | "last_name" | "first_name" | "password",
      errors?: any,
      fieldNameInput: string,
      placeholderName: string,
      sizeInput:  "small" | "medium" | "large",
      typeInput: inputType,
}