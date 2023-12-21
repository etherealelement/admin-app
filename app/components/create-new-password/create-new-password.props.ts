export interface IPasswordForm {
    password: string;
    confirmPassword: string;
}

export interface IPasswordValue {
    password: string;
    passwordConfirm: string;
    passwordConfirmation: string;
}

export type PasswordAction = | { type: 'PASSWORD', payload: string } | {type: "PASSWORD_CONFIRM", payload: string;}