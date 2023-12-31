'use client';
import {FC, useEffect} from 'react';
import {Input} from '../ui/input/Input';
import styles from './auth-from.module.scss';
import {Button} from '../ui/button/button';
import {IForm, IFormProps} from './auth-from.props';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import Link from "next/link";
import { ResponseLoginApi } from '@/app/redux/interfaces/login-user';
import { useLoginMutation } from '@/app/redux/store/login-api';
import { IRegisterForm } from '../register-form/register-form.props';
import { useRouter } from 'next/navigation';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { formGroupLabelInputs } from './config/config-form';
import { LoginFormInput } from './login-form-input/login-form-input';

export const AuthForm: FC<IFormProps> = ({
                                             titleForm,
                                             descriptionForm,
                                             className,
                                             type,
                                             buttonText,
                                             buttonTextGoogle,
                                             descriptionText,
                                             descriptionLink,
                                             ...props
                                         }: IFormProps) => {
;
    const methods = useForm<IForm>({
    defaultValues: {},
    mode: "onChange",
    })

    const [CreateLoginMutation, result] = useLoginMutation<ResponseLoginApi>()

    const addLoginUserData = async () => {
        const fieldData = methods.getValues();
        try {
            await CreateLoginMutation(fieldData);
        } catch (error) {
            console.log(`Ошибка ${error}`);
            
        }
    }

    const submit: SubmitHandler<IForm> = (data) => {
        methods.reset();
    }

    const router = useRouter();

    useEffect(()=>{
        if (result.status === "fulfilled") {
            router.push("/pages/main-page")
        }
    }, [result,router])


    return (
        <FormProvider {...methods}>
        <form className={styles.form} onSubmit={methods.handleSubmit(submit)} {...props}>
            <div className={styles.formDescription}>
                <h1 className={styles.formDescriptionTitle}>{titleForm}</h1>
                <label className={styles.formDescriptionText}>
                    <p>{descriptionForm}</p>
                </label>
            </div>
            <div className={styles.formInner}>
                
            <div className={styles.inputBlock}>
        {formGroupLabelInputs().map(item => <LoginFormInput
        key={item.id} 
        configType={item.configType}
        fieldNameInput={item.fieldNameInput}
        labelName={item.fieldNameInput}
        placeholderName={item.placeholderName}
        sizeInput={item.sizeInput}
        typeInput={item.typeInput}
        type={item.type}
        ></LoginFormInput>)} 

            <div className={styles.failContainer}>
            {result.error?.data.password}
            {result.error?.data.username}
          </div>
        </div>
        <Button
          type={(methods.formState.isDirty && methods.formState.isValid && 'login') || 'disable'}
          onClick={() => addLoginUserData()}
        >
          {!result.isLoading && buttonText}
          {result.isLoading && (
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
            ></Spin>
          )}
        </Button>
        <div className={styles.policy}>
          <p className={styles.policyText}>{descriptionText}</p>
          <Link href={'/'} className={styles.policyLink}>
            {descriptionLink}
          </Link>
        </div>

        <span className={styles.decor}>
          <svg
            width="384"
            height="22"
            viewBox="0 0 384 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="10.5" x2="176" y2="10.5" stroke="#F0EFF3" />
            <line x1="208" y1="10.5" x2="384" y2="10.5" stroke="#F0EFF3" />
            <path
              d="M189.06 16.126C188.36 16.126 187.753 15.9813 187.24 15.692C186.727 15.3933 186.33 14.9733 186.05 14.432C185.77 13.8813 185.63 13.228 185.63 12.472C185.63 11.716 185.77 11.0673 186.05 10.526C186.33 9.97533 186.727 9.55533 187.24 9.266C187.753 8.96733 188.36 8.818 189.06 8.818C189.76 8.818 190.367 8.96733 190.88 9.266C191.403 9.55533 191.804 9.97533 192.084 10.526C192.373 11.0673 192.518 11.716 192.518 12.472C192.518 13.228 192.373 13.8813 192.084 14.432C191.804 14.9733 191.403 15.3933 190.88 15.692C190.367 15.9813 189.76 16.126 189.06 16.126ZM189.06 15.02C189.676 15.02 190.166 14.8053 190.53 14.376C190.894 13.9467 191.076 13.312 191.076 12.472C191.076 11.632 190.894 11.002 190.53 10.582C190.166 10.1527 189.676 9.938 189.06 9.938C188.453 9.938 187.968 10.1527 187.604 10.582C187.24 11.002 187.058 11.632 187.058 12.472C187.058 13.312 187.235 13.9467 187.59 14.376C187.954 14.8053 188.444 15.02 189.06 15.02ZM194.143 16V10.694C194.143 10.4047 194.133 10.1153 194.115 9.826C194.105 9.52733 194.087 9.23333 194.059 8.944H195.431L195.585 10.764H195.361C195.454 10.3253 195.613 9.96133 195.837 9.672C196.061 9.38267 196.331 9.168 196.649 9.028C196.975 8.888 197.316 8.818 197.671 8.818C197.82 8.818 197.946 8.82733 198.049 8.846C198.151 8.85533 198.254 8.874 198.357 8.902L198.343 10.162C198.184 10.0967 198.044 10.0593 197.923 10.05C197.811 10.0313 197.671 10.022 197.503 10.022C197.092 10.022 196.742 10.1153 196.453 10.302C196.163 10.4793 195.944 10.722 195.795 11.03C195.645 11.338 195.571 11.6693 195.571 12.024V16H194.143Z"
              fill="#B1B5C3"
            />
          </svg>
        </span>
        <Button type={'google'}>{buttonTextGoogle}</Button>
        <div className={styles.already}>
          <p className={styles.alreadyText}>Don’t have an account?</p>
          <Link href={'/pages/auth-page'} className={styles.alreadyLogin}>
            {' '}
            Sign up for free
          </Link>
          </div>
        </div>
        </form>
        </FormProvider>
    );
};
