import { FC } from 'react';
import { Input } from '../ui/input/Input';
import styles from './auth-from.module.scss';
import { Button } from '../ui/button/button';

export const AuthForm: FC = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formDescription}>
        <h1 className={styles.formDescriptionTitle}>Login to lorem ipsum</h1>
        <p className={styles.formDescriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>
      <div className={styles.formInner}>
        <div className={styles.inputBlock}>
          <div className={styles.inputBlockEmail}>
            <p className={styles.inputTitle}>Email</p>
            <Input
              type="email"
              placeholder="Enter your email"
              size="large"
              value=""
            ></Input>
          </div>
          <div className={styles.inputBlockPassword}>
            <p className={styles.inputTitle}>Password</p>
            <Input
              type="password"
              placeholder="Enter your password"
              size="large"
              value=""
            ></Input>
          </div>
        </div>

        <Button type="login">Login</Button>
      </div>
    </form>
  );
};
