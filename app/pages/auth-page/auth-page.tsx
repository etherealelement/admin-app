import { AuthForm } from '@/app/components/auth-form/auth-from';
import { FC } from 'react';
import styles from './auth-page.module.scss';

export const AuthPage: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <AuthForm></AuthForm>
      </div>
    </div>
  );
};
