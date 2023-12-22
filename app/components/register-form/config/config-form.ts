export const formConfig = (register: any) => ({
  email: {
    nameField: 'email',
    type: 'email',
    placeholder: 'Enter your email',
    size: 'large',
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
  },

  username: {
    nameField: 'username',
    type: 'text',
    placeholder: 'Enter your email',
    size: 'large',
    ...register('username', {
      required: 'Field is required',
      minLength: {
        value: 5,
        message: 'No less 5 symbols',
      },
    }),
  },

  phone: {
    nameField: 'phone',
    type: 'tel',
    placeholder: 'Enter your last name',
    size: 'large',
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
  },

  last_name: {
    nameField: 'last_name',
    type: 'text',
    placeholder: 'Enter your last name',
    size: 'large',
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
  },

  first_name: {
    nameField: 'first_name',
    type: 'email',
    placeholder: 'Enter your first name',
    size: 'large',
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
  },

  password: {
    nameField: 'password',
    type: 'password',
    placeholder: 'Enter your password',
    size: 'large',
    ...register('password', {
      required: 'Field is required',
      minLength: {
        value: 5,
        message: 'No less 5 symbols',
      },
    }),
  },
});


export const formGroupInputs =(errors: any) =>  {
  return ([
    {
      name: 'Email',
      configType: 'email',
      errors: errors.email,
      fieldNameInput: "email",
      placeholderName: "Enter your email",
      sizeInput: "large",
      typeInput: "email"
    },
    {
      name: 'Username',
      configType: 'username',
      errors: errors.username,
      fieldNameInput: "username",
      placeholderName: "Enter your username",
      sizeInput: "large",
      typeInput: "text",
    },
    {
      name: 'first_name',
      configType: 'first_name',
      errors: errors.first_name,
      fieldNameInput: "username",
      placeholderName: "Enter your username",
      sizeInput: "large",
      typeInput: "text",
    },
    {
      name: 'last_name',
      configType: 'last_name',
      errors: errors.last_name,
      fieldNameInput: "Last Name",
      placeholderName: "Enter your last name",
      sizeInput: "large",
      typeInput: "text",
    },
    {
      name: 'phone',
      configType: 'phone',
      errors: errors.phone,
      fieldNameInput: "",
      placeholderName: "Enter your phone",
      sizeInput: "large",
      typeInput: "tel",
    },
    {
      name: 'password',
      configType: 'password',
      errors: errors.password,
      fieldNameInput: "password",
      placeholderName: "Enter your password",
      sizeInput: "large",
      typeInput: "password",
    },
  ])
}