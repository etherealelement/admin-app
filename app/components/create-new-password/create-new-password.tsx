"use client";
import {FC, useContext, useRef} from "react";
import {CreateNewPasswordProps} from "@/app/pages/create-new-password/create-new-password.props";
import styles from "./create-new-password.module.scss";
import {BackLink} from "@/app/components/ui/back-link/back-link";
import {Input} from "@/app/components/ui/input/Input";
import {Button} from "@/app/components/ui/button/button";
import {SubmitHandler, useForm} from "react-hook-form";
import {
    IPasswordForm,
} from "@/app/components/create-new-password/create-new-password.props";


export const CreateNewPassword:FC<CreateNewPasswordProps> = ({title,description,className,...props}: CreateNewPasswordProps) => {

    const {
        register,
        watch,
        handleSubmit,
        formState: {errors, isDirty, isValid},
        reset,
    } = useForm<IPasswordForm>({
        defaultValues: {},
        mode: 'onSubmit',
    });
    const password = useRef({});
    password.current = watch("password", "")

    const submit: SubmitHandler<IPasswordForm> = (data) => {
        reset();
    };

    console.log(errors.passwordConfirmation);

    return <form className={styles.form} onSubmit={handleSubmit(submit)}>
            <div className={styles.formInner}>
                <BackLink></BackLink>
                <div className={styles.formInnerBox}>
                    <h1 className={styles.formInnerBoxTitle}>{title}</h1>
                    <p className={styles.formInnerBoxDescription}>{description}</p>
                </div>

                <div className={styles.formInnerWrapper}>
                    <label className={styles.formInnerWrapperLabel}>
                        <div className={styles.formInnerWrapperLabelErrorsBlock}>
                            <span className={styles.formInnerWrapperLabelSpan}>New password</span>
                            <div className={styles.errors}>
                                {errors?.password && (
                                    <div className={styles.errorMessage}>
                    <span className={styles.errorContainer}>
                      <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.6515 0.961394L13.4973 9.37148C13.604 9.62251 13.6507 9.82663 13.664 10.0387C13.6906 10.5341 13.5173 11.0157 13.1774 11.3863C12.8375 11.7556 12.3775 11.9736 11.8776 12H2.11926C1.91263 11.9874 1.706 11.9405 1.5127 11.8679C0.546196 11.4781 0.0796079 10.3815 0.472875 9.43093L5.35205 0.955449C5.51869 0.657519 5.77198 0.400546 6.08526 0.235396C6.99178 -0.26732 8.14492 0.0629796 8.6515 0.961394ZM7.57833 6.50381C7.57833 6.8209 7.31837 7.0858 6.99843 7.0858C6.67848 7.0858 6.41186 6.8209 6.41186 6.50381V4.63497C6.41186 4.31723 6.67848 4.06025 6.99843 4.06025C7.31837 4.06025 7.57833 4.31723 7.57833 4.63497V6.50381ZM6.99843 9.34505C6.67848 9.34505 6.41186 9.08015 6.41186 8.76373C6.41186 8.44598 6.67848 8.18174 6.99843 8.18174C7.31837 8.18174 7.57833 8.44003 7.57833 8.75646C7.57833 9.08015 7.31837 9.34505 6.99843 9.34505Z"
                            fill="#C2473B"
                        />
                      </svg>
                        {errors?.password.message}
                    </span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <Input nameField={"new-password"}
                               type={"password"}
                               size={"large"}
                               placeholder={"Enter your password"}
                               {...register('password', {
                                   required: 'Field is required',
                                   minLength: {
                                       value: 5,
                                       message: 'No less 5 symbols',
                                   },
                               })}

                        ></Input>
                    </label>
                    <label className={styles.formInnerWrapperLabel}>
                        <span className={styles.formInnerWrapperLabelSpan}>Confirm new password</span>
                        <Input nameField={"new-password"}
                               type={"password"}
                               size={"large"}
                               placeholder={"Enter your password"}
                               {...register("passwordConfirmation", {
                                   required: true,
                                   validate: (value) =>
                                       value === password.current || "Пароли должны совпадать",
                               })}
                        ></Input>
                    </label>
                    {errors.passwordConfirmation && <span className={styles.errorPasswordMessage}>Пароли не совпадают</span>}
                </div>
                <Button type={!errors.passwordConfirmation ? "login" : "disable"}>Reset password</Button>
            </div>
        </form>
} 