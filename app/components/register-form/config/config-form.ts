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
