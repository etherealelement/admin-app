"use client"
import {FC} from "react";
import styles from "./forgot-password-page.module.scss";
import Image from "next/image";
import {ForgotPassword} from "@/app/components/forgot-password/forgot-password";


const ForgotPasswordPage:FC = () => {
    return <section className={styles.forgotPassword}>
        <div className={styles.forgotPasswordInner}>
            <div className={styles.forgotPasswordInnerLeft}>
                <ForgotPassword title={"Forgot password"} description={"Enter the email associated with your account and we’ll send an email with instructions to reset your password."}></ForgotPassword>
            </div>
            <div className={styles.forgotPasswordInnerRight}>
                <div className={styles.regPageInnerRight}>
                    <Image src={"/Reg_Back.png"} alt={"reg"} width={720} height={900}></Image>
                </div>
            </div>
        </div>
    </section>
}

export default ForgotPasswordPage;