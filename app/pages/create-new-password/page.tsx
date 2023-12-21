"use client"
import {FC, useReducer, useState} from "react";
import styles from "./create-new-password.module.scss";
import {AuthForm} from "@/app/components/auth-form/auth-from";
import Image from "next/image";
import {CreateNewPasswordProps} from "@/app/pages/create-new-password/create-new-password.props";
import {CreateNewPassword} from "@/app/components/create-new-password/create-new-password";
import {IPasswordValue, PasswordAction} from "@/app/components/create-new-password/create-new-password.props";
import {NewPasswordContext, NewPasswordContextToggler} from "@/app/context/new-password-context";


const CreateNewPasswordPage:FC<CreateNewPasswordProps> = ({title, description,className, ...props}: CreateNewPasswordProps) => {

    return <section className={styles.passwordPage} {...props}>
                <div className={styles.passwordPageInner}>
                    <div className={styles.passwordPageInnerLeft}>
                        <CreateNewPassword
                            title={"Create new password"}
                            description={"Your new password must be different from previous used passwords."}
                        ></CreateNewPassword>
                    </div>
                    <div className={styles.passwordPageInnerRight}>
                        <div className={styles.regPageInnerRightWrapper}>
                            <Image src={"/Reg_Back.png"} alt={"reg"} width={720} height={900}></Image>
                        </div>
                    </div>
                </div>
            </section>
}


export default CreateNewPasswordPage;