import { FC } from "react";
import { ButtonProps } from "./button.props";
import React from "react";
import cn from "classnames";
import styles from "./button.module.scss";

export const Button: FC<ButtonProps> = React.memo(function Button({
	children,
	type,
	className,
	...props
}: ButtonProps): JSX.Element {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.login]: type === "login",
				[styles.user]: type === "user",
				[styles.upgrade]: type === "upgrade",
                [styles.plan]: type === "plan",
				[styles.signup]: type === 'signup',
			})}
			{...props}
		>
			{type === "user" && (
				<span className={styles.icon}>
					{type === "user" && (
						<svg
							width="17"
							height="16"
							viewBox="0 0 17 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="8.5"
								cy="6"
								r="2"
								stroke="white"
								strokeWidth="0.833333"
							/>
							<circle
								cx="8.49992"
								cy="8.00001"
								r="6.66667"
								stroke="white"
								strokeWidth="0.833333"
							/>
							<path
								d="M12.4794 13.3333C12.3733 11.4057 11.7831 10 8.49997 10C5.21681 10 4.62661 11.4057 4.52051 13.3333"
								stroke="white"
								strokeWidth="0.833333"
								strokeLinecap="round"
							/>
						</svg>
					)}
				</span>
			)}

			{type === "plan" && (
				<span className={styles.icon}>
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3.77952 6.60957L5.82095 3.84755C7.14052 2.06218 7.80031 1.16949 8.41588 1.35814C9.03146 1.54678 9.03146 2.64166 9.03146 4.83141V5.03787C9.03146 5.82767 9.03146 6.22257 9.28382 6.47027L9.29717 6.4831C9.55497 6.72557 9.96598 6.72557 10.788 6.72557C12.2672 6.72557 13.0069 6.72557 13.2568 7.1742C13.261 7.18163 13.265 7.18912 13.2689 7.19666C13.5049 7.65223 13.0766 8.23164 12.2201 9.39045L10.1787 12.1524C8.8591 13.9378 8.1993 14.8305 7.58373 14.6419C6.96816 14.4532 6.96817 13.3583 6.9682 11.1685L6.96821 10.9622C6.96822 10.1724 6.96822 9.77745 6.71586 9.52974L6.70251 9.51692C6.44471 9.27444 6.03369 9.27444 5.21167 9.27444C3.73243 9.27444 2.9928 9.27444 2.74283 8.82581C2.7387 8.81839 2.73467 8.8109 2.73077 8.80336C2.4948 8.34778 2.92304 7.76838 3.77952 6.60957Z"
							fill="white"
						/>
					</svg>
				</span>
			)}
			{children}
		</button>
	);
});
