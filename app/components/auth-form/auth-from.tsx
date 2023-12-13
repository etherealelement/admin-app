'use client';
import {FC, useState} from 'react';
import {Input} from '../ui/input/Input';
import styles from './auth-from.module.scss';
import {Button} from '../ui/button/button';
import {IForm, IFormProps} from './auth-from.props';
import {useForm, SubmitHandler} from 'react-hook-form';
import Link from "next/link";
import {FormErrorInterface} from "../../global-interfaces/formError.interface";
import {isEmptyObject} from "@/app/helpers/functions/isEmptyObject";
import isEmpty from "lodash/isEmpty";
import {ButtonStatement} from "@/app/components/ui/button/button.props";
export const AuthForm: FC<IFormProps> = ({titleForm, descriptionForm, className, type, ...props}: IFormProps) => {
    const {
        register,
        handleSubmit,
        formState: {errors,isDirty,isValid},
        reset,
    } = useForm<IForm>({
        defaultValues: {},
        mode: 'onChange',
    });


    const submit: SubmitHandler<IForm> = (data) => {
        reset();
    };


    return (
        <form className={styles.form} onSubmit={handleSubmit(submit)} {...props}>
            <div className={styles.formDescription}>
                <h1 className={styles.formDescriptionTitle}>{titleForm}</h1>
                <label className={styles.formDescriptionText}>
                    <p>{descriptionForm}</p>
                </label>
            </div>
            <div className={styles.formInner}>
                <div className={styles.inputBlock}>
                    <div className={styles.inputBlockEmail}>
                        <label className={styles.inputTitle}>
                            Email
                            <div className={styles.errors}>
                                {errors?.email && (
                                    <div className={styles.errorMessage}>
                    <span>
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
                    </span>
                                        {errors?.email.message}
                                    </div>
                                )}
                            </div>
                        </label>
                        <Input
                            nameField={"email"}
                            type="email"
                            placeholder="Enter your email"
                            size="large"
                            {...register('email', {
                                required: 'Field is required',
                                minLength: {
                                    value: 5,
                                    message: 'No less 5 symbols',
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Wrong email format',
                                },
                            })}
                        ></Input>
                    </div>

                    <div className={styles.inputBlockPassword}>
                        <label className={styles.inputTitle}>
                            Password
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
                        </label>
                        {/* password */}
                        <Input
                            nameField={"password"}
                            type="password"
                            placeholder="Enter your password"
                            size="large"
                            {...register('password', {
                                required: 'Field is required',
                                minLength: {
                                    value: 5,
                                    message: 'No less 5 symbols',
                                },
                            })}
                        ></Input>
                    </div>
                </div>
                <Link href={isDirty && isValid && "main-page" || ""}>
                    <Button type={isDirty && isValid && "login" || "disable"}>Sign up</Button>
                </Link>
                {type === "reg" && <div className={styles.policy}>
                    <p className={styles.policyText}>By signing up, I agree with</p>
                    <Link href={"/"} className={styles.policyLink}>Terms & Conditions</Link>
                </div>
                }
                {type === "reg" && <span className={styles.decor}><svg width="384" height="22" viewBox="0 0 384 22"
                                                                       fill="none"
                                                                       xmlns="http://www.w3.org/2000/svg">
<line y1="10.5" x2="176" y2="10.5" stroke="#F0EFF3"/>
<line x1="208" y1="10.5" x2="384" y2="10.5" stroke="#F0EFF3"/>
<path
    d="M189.06 16.126C188.36 16.126 187.753 15.9813 187.24 15.692C186.727 15.3933 186.33 14.9733 186.05 14.432C185.77 13.8813 185.63 13.228 185.63 12.472C185.63 11.716 185.77 11.0673 186.05 10.526C186.33 9.97533 186.727 9.55533 187.24 9.266C187.753 8.96733 188.36 8.818 189.06 8.818C189.76 8.818 190.367 8.96733 190.88 9.266C191.403 9.55533 191.804 9.97533 192.084 10.526C192.373 11.0673 192.518 11.716 192.518 12.472C192.518 13.228 192.373 13.8813 192.084 14.432C191.804 14.9733 191.403 15.3933 190.88 15.692C190.367 15.9813 189.76 16.126 189.06 16.126ZM189.06 15.02C189.676 15.02 190.166 14.8053 190.53 14.376C190.894 13.9467 191.076 13.312 191.076 12.472C191.076 11.632 190.894 11.002 190.53 10.582C190.166 10.1527 189.676 9.938 189.06 9.938C188.453 9.938 187.968 10.1527 187.604 10.582C187.24 11.002 187.058 11.632 187.058 12.472C187.058 13.312 187.235 13.9467 187.59 14.376C187.954 14.8053 188.444 15.02 189.06 15.02ZM194.143 16V10.694C194.143 10.4047 194.133 10.1153 194.115 9.826C194.105 9.52733 194.087 9.23333 194.059 8.944H195.431L195.585 10.764H195.361C195.454 10.3253 195.613 9.96133 195.837 9.672C196.061 9.38267 196.331 9.168 196.649 9.028C196.975 8.888 197.316 8.818 197.671 8.818C197.82 8.818 197.946 8.82733 198.049 8.846C198.151 8.85533 198.254 8.874 198.357 8.902L198.343 10.162C198.184 10.0967 198.044 10.0593 197.923 10.05C197.811 10.0313 197.671 10.022 197.503 10.022C197.092 10.022 196.742 10.1153 196.453 10.302C196.163 10.4793 195.944 10.722 195.795 11.03C195.645 11.338 195.571 11.6693 195.571 12.024V16H194.143Z"
    fill="#B1B5C3"/>
</svg>
</span>}
              {type === "reg" && <Button type={"google"}>Sign up with Google</Button>}
                {type === "reg" && <div className={styles.already}>
                    <p className={styles.alreadyText}>Already have an account?</p>
                    <Link href={"/pages/auth-page"} className={styles.alreadyLogin}> Login</Link>
                </div>}
            </div>
        </form>
    );
};
