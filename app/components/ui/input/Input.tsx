import { FC } from "react";
import { InputProps } from "./Input.props";
import styles from "./Input.module.scss";
import cn from "classnames";
import React from "react";


export const Input = React.forwardRef(function Input({
	type,
	className,
	size,
    placeholder,
	...props
}: InputProps, ref): JSX.Element {
	return (
		<div className={styles.wrapper}>
			{type === "job" && (
				<span className={styles.jobIcon}>
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M7.66683 1.83333C4.44517 1.83333 1.8335 4.445 1.8335 7.66666C1.8335 10.8883 4.44517 13.5 7.66683 13.5C10.8885 13.5 13.5002 10.8883 13.5002 7.66666C13.5002 4.445 10.8885 1.83333 7.66683 1.83333ZM0.833496 7.66666C0.833496 3.89272 3.89288 0.833328 7.66683 0.833328C11.4408 0.833328 14.5002 3.89272 14.5002 7.66666C14.5002 9.37367 13.8742 10.9345 12.8394 12.1321L15.0204 14.3131C15.2156 14.5084 15.2156 14.825 15.0204 15.0202C14.8251 15.2155 14.5085 15.2155 14.3133 15.0202L12.1323 12.8392C10.9347 13.8741 9.37384 14.5 7.66683 14.5C3.89288 14.5 0.833496 11.4406 0.833496 7.66666Z"
							fill="#151515"
						/>
					</svg>
				</span>
			)}
			<input
				
				className={cn(styles.input, className, {
					[styles.large]: size === "large",
					[styles.medium]: size === "medium",
					[styles.small]: size === "small",
				})}
                placeholder={placeholder}
				ref = {ref}
				{...props}
            />
		</div>
	);
})
