import { AuthForm } from '@/app/components/auth-form/auth-from';
import { FC } from 'react';
import styles from './auth-page.module.scss';
import Image from "next/image";

const AuthPage: FC = (): JSX.Element => {
  return (
    <section className={styles.authPage}>
        <div className={styles.authPageInner}>
            <div className={styles.authPageInnerLeft}>
                <AuthForm titleForm={"Login to lorem ipsum"}
                          descriptionForm={"Welcome back! Login to your account - find more potential customers."}
                          type={"login"}
                          buttonText={"Login"}
                          buttonTextGoogle={"Login with Google"}
                          descriptionText={"Don’t have an account?"}
                          descriptionLink={"Sign up for free"}
                ></AuthForm>
            </div>
            <div className={styles.authPageInnerRight}>
                <div className={styles.regPageInnerRight}>
                    <Image src={"/Reg_Back.png"} alt={"reg"} width={720} height={900}></Image>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AuthPage;