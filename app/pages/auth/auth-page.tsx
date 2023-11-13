import { FC } from 'react';
import styles from './auth-page.module.scss';
import { AuthForm } from '@/app/components/auth-form/auth-from';
import { Hero } from '@/app/components/hero/hero';

export const AuthPage: FC = (): JSX.Element => {
  return (
    <section className={styles.auth}>
      <div className={styles.authInner}>
        <div className={styles.authFormContainer}>
          <AuthForm></AuthForm>
        </div>
        <Hero></Hero>
      </div>
    </section>
  );
};
