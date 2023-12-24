import { IRegisterFormConfig } from "@/app/global-interfaces/register-form-config";

export type inputType = "email" | "username" | "phone" | "last_name" | "first_name" | "password"

export const formConfig = (register: any, typeInput: inputType) => {
      switch (typeInput) {
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
        case "username":
          return ({
            ...register('username', {
                   required: 'Field is required',
                  minLength: {
                    value: 5,
                    message: 'No less 5 symbols',
                  },
                }),
              })
        case "phone":
          return ({
            ...register('phone', {
                   required: 'Field is required',
                  minLength: {
                     value: 5,
                            message: 'No less 5 symbols',
                         },
                   pattern: {
                     value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                     message: 'Wrong phone format',
                   },
                 }),
          })
        case "last_name":
          return ({
            ...register('last_name', {
                 required: 'Field is required',
                 minLength: {
                    value: 5,
                    message: 'No less 5 symbols',
                  },
                  pattern: {
                    value: /^[a-zA-Z][a-zA-Z0-9]{2,15}$/,
                    message: 'Wrong last name format',
                  },
                 }),
          })
        case "first_name":
          return ({
            ...register('first_name', {
                   required: 'Field is required',
                  minLength: {
                   value: 5,
                     message: 'No less 5 symbols',
                   },
                   pattern: {
                     value: /^[a-zA-Z][a-zA-Z0-9]{2,15}$/,
                     message: 'Wrong fist name format',
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
};


export const formGroupInputs = ():IRegisterFormConfig[] => {
  return ( [{
    id: 1,
    name: 'Email',
    configType: 'email',
    fieldNameInput: "Email",
    placeholderName: "Enter your email",
    sizeInput: "large",
    typeInput: "email",
    type: "email"
  },
  {
    id: 2,
    name: 'Username',
    configType: 'username',
    fieldNameInput: "Username",
    placeholderName: "Enter your username",
    sizeInput: "large",
    typeInput: "username",
    type: 'text',
  },
  {
    id: 3,
    name: 'first_name',
    configType: 'first_name',
    fieldNameInput: "First Name",
    placeholderName: "Enter your first name",
    sizeInput: "large",
    typeInput: "first_name",
    type: 'text',
  },
  {
    id: 4,
    name: 'last_name',
    configType: 'last_name',
    fieldNameInput: "Last Name",
    placeholderName: "Enter your last name",
    sizeInput: "large",
    typeInput: "last_name",
    type: 'text',
  },
  {
    id: 5,
    name: 'phone',
    configType: 'phone',
    fieldNameInput: "Phone",
    placeholderName: "Enter your phone",
    sizeInput: "large",
    typeInput: "phone",
    type: "tel",
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
 