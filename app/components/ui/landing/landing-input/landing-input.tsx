'use client';
import {
  ChangeEvent,
  FC,
  use,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { EmailForm, LandingInputProps } from './landing-input.props';
import styles from './landing-input.module.scss';
import { Button } from '../../button/button';
import { SubmitHandler, useForm } from 'react-hook-form';
import cn from 'classnames';
import { CheckboxContext } from '@/app/context/landing-context';
import emailjs from '@emailjs/browser';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import Router, { useRouter } from 'next/navigation';
import Link from 'next/link';

export const LandingInput: FC<LandingInputProps> = ({
  placeholderText,
  className,
  ...props
}: LandingInputProps): JSX.Element => {
  const checkboxValue = useContext(CheckboxContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailForm>({
    defaultValues: {},
    mode: 'onChange',
  });

  const SubmitHandler: SubmitHandler<EmailForm> = () => {
    reset();
  };

  // email js

  const [formData, setFormData] = useState<string>('');
  const [formErrors, setFormErrors] = useState<string>('');
  const [spinned, setSpinned] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_iwcwg32',
        'template_xf4putg',
        form.current,
        'Z1tp-R_4MiXr-iQ9a'
      )
      .then(
        (result) => {
          if (result.text) {
            setSpinned(false);
            setFormData(result.text);
          }
        },
        (error) => {
          setFormErrors(error);
        }
      );
  };

  // redirect

  const router = useRouter();

  useEffect(() => {
    if (formData) {
      setTimeout(() => {
        router.push('pages/reg-page');
      }, 0);
    }
  }, [formData, router]);

  return (
    <form
      ref={form}
      onSubmit={(e) => {
        if (checkboxValue) {
          sendEmail(e);
          handleSubmit(SubmitHandler);
        }
      }}
      className={styles.form}
    >
      <div className={styles.formInner}>
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
        <label className={styles.wrapper}>
          <input
            type="text"
            className={cn(styles.input, className, {
              [styles.inputError]: errors.email,
              [styles.successInput]: formData.length > 0,
            })}
            onSubmit={handleSubmit(SubmitHandler)}
            placeholder={placeholderText}
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
          ></input>
          <Button
            type="signup"
            onClick={() => setSpinned((e) => !e)}
            className={cn(styles.button, className, {
              [styles.errorButton]: errors.email,
              [styles.errorButton]: !checkboxValue,
              [styles.successBtn]: formData.length > 0,
            })}
          >
            {!spinned ? 'Sign up for free' : 'Please wait...'}
            {spinned && (
              <Spin
                indicator={<LoadingOutlined style={{ fontSize: 20 }} spin />}
              />
            )}
          </Button>
        </label>
      </div>
    </form>
  );
};
