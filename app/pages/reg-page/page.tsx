import { FC } from 'react';
import styles from "./reg-page.module.scss";
import {AuthForm} from "@/app/components/auth-form/auth-from";
import Image from "next/image";

 const RegPage: FC = (): JSX.Element => {
  return <section className={styles.regPage}>
   <div className={styles.regPageInner}>
     <div className={styles.regPageInnerLeft}>
         <AuthForm
             titleForm={"Sign Up to lorem ipsum"}
             descriptionForm={"Become a member - you’ll get free access to millions of contacts of potential customers. "}
             type={"reg"}
             buttonTextGoogle={"Sign up with Google"}
             descriptionText={"By signing up, I agree with"}
             descriptionLink={"Terms & Conditions"}
             buttonText={'Sign up'}
         ></AuthForm>
     </div>
       <div className={styles.regPageInnerRight}>
           <div className={styles.regPageInnerRightWrapper}>
                <Image src={"/Reg_Back.png"} alt={"reg"} width={720} height={900}></Image>
           </div>
       </div>
   </div>
  </section>;
};


 export default RegPage;