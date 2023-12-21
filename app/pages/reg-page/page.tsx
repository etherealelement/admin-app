'use client';
import { FC } from 'react';
import styles from './reg-page.module.scss';
import Image from 'next/image';
import { RegisterForm } from '@/app/components/register-form/register-form';

const RegPage: FC = (): JSX.Element => {
  return (
    <section className={styles.regPage}>
      <div className={styles.regPageInner}>
        <div className={styles.regPageInnerLeft}>
          <RegisterForm
            descriptionForm={
              'Become a member - you’ll get free access to millions of contacts of potential customers. '
            }
            titleForm={'Sign Up to lorem ipsum'}
            buttonText={'Sign up'}
            buttonTextGoogle={'Sign up with Google'}
            descriptionText={'By signing up, I agree with'}
            descriptionLink={'Terms & Conditions'}
          ></RegisterForm>
        </div>
        <div className={styles.regPageInnerRight}>
          <div className={styles.regPageInnerRightWrapper}>
            <Image
              src={'/Reg_Back.png'}
              alt={'reg'}
              width={720}
              height={900}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegPage;
