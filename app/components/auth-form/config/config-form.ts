import { ILoginFormConfig } from "@/app/global-interfaces/login-form-config";
import { IRegisterFormConfig } from "@/app/global-interfaces/register-form-config";


export type inputType = "email" | "password" | "username" | "text" | "phone" | "first_name" | "last_name";

export const formConfig = (register: any, typeInput: inputType) => {
    switch(typeInput) {
      case "email": 
      return ({
        ...register('email', {
          required: 'Field is required',
          minLength: {
           value: 5,
           message: 'No less 5 symbols',
         },
         pattern: {
           value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
           message: 'Wrong email format',
          },
        }),
      })
      case "password": 
      return ({
        ...register('password', {
               required: 'Field is required',
               minLength: {
                 value: 5,
                message: 'No less 5 symbols',
              },
             }),
      })
    } 
}

export const formGroupLabelInputs = ():ILoginFormConfig[] => {
  return ([
    {
      id: 1,
      name: 'Username',
      configType: 'username',
      fieldNameInput: "Username",
      placeholderName: "Enter your username",
      sizeInput: "large",
      typeInput: "username",
      type: 'text',
    },
    {
      id: 6,
    name: 'password',
    configType: 'password',
    fieldNameInput: "Password",
    placeholderName: "Enter your password",
    sizeInput: "large",
    typeInput: "password",
    type: "password",
    },
  ])
}