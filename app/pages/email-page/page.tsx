import {FC} from "react";
import styles from "./email-page.module.scss";
import {AuthForm} from "@/app/components/auth-form/auth-from";
import Image from "next/image";
import {CheckEmail} from "@/app/components/check-email/check-email";


const Page:FC = () => {
    return <section className={styles.emailPage}>
        <div className={styles.emailPageInner}>
            <div className={styles.emailPageInnerLeft}>
                <CheckEmail
                    description={"We have sent a password reset instructions to your email."}
                    title={"Check your email"}
                ></CheckEmail>
            </div>
            <div className={styles.emailPageInnerRight}>
                <div className={styles.regPageInnerRight}>
                    <Image src={"/Reg_Back.png"} alt={"reg"} width={720} height={900}></Image>
                </div>
            </div>
        </div>
    </section>
}

export default Page;