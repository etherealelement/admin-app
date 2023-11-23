"use client";
import { FC } from "react";
import { Input } from "../ui/input/Input";
import styles from "./auth-from.module.scss";
import { Button } from "../ui/button/button";
import { IForm } from "./auth-from.props";
import {useForm, SubmitHandler} from "react-hook-form";
export const AuthForm: FC = () => {
	const 
	{
		register, 
		handleSubmit,
		formState: {
			errors
		}
	
	} = useForm<IForm>({
		defaultValues: {}
	});

	const submit: SubmitHandler<IForm> = data => {
		console.log(JSON.stringify(data));
	}


	// const isEmail = data: any => {
	// 	console.log(data);
	// 	return true;
	// }
	
	return (
		<form className={styles.form} onSubmit={handleSubmit(submit)}>
            <div className={styles.formDescription}>
                <h1 className={styles.formDescriptionTitle}>Login to lorem ipsum</h1>
                <label className={styles.formDescriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</label>
            </div>
			<div className={styles.formInner}>
				
				<div className={styles.inputBlock}>
					<div className={styles.inputBlockEmail}>
                        <label className={styles.inputTitle}>
                            Email
                        </label>
						<Input
							type="email"
							placeholder="Enter your email"
							size="large"
							{...register("email")}
						></Input>
					</div>
					<div className={styles.inputBlockPassword}>
                    <p className={styles.inputTitle}>
                            Password
                        </p>
                    <Input
						type="password"
						placeholder="Enter your password"
						size="large"
						 {...register("password")}
					></Input>
                    </div>
				</div>

				<Button type="login">Login</Button>
			</div>
		</form>
	);
};
