import {FC} from "react";
import {ButtonProps} from "./button.props";
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
                [styles.google]: type === "google",
                [styles.disable]: type === "disable",
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

            {type === "google" && (<span><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                              xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_1003_6425)">
<path
    d="M19.805 10.2304C19.805 9.55059 19.7499 8.86714 19.6323 8.19839H10.2V12.0492H15.6014C15.3773 13.2912 14.6571 14.3898 13.6025 15.088V17.5866H16.825C18.7173 15.8449 19.805 13.2728 19.805 10.2304Z"
    fill="#4285F4"/>
<path
    d="M10.1999 20.0007C12.897 20.0007 15.1714 19.1151 16.8286 17.5866L13.6061 15.0879C12.7096 15.6979 11.5521 16.0433 10.2036 16.0433C7.59474 16.0433 5.38272 14.2832 4.58904 11.9169H1.26367V14.4927C2.96127 17.8695 6.41892 20.0007 10.1999 20.0007Z"
    fill="#34A853"/>
<path
    d="M4.5854 11.9169C4.16651 10.675 4.16651 9.33011 4.5854 8.08814V5.51236H1.2637C-0.154633 8.33801 -0.154633 11.6671 1.2637 14.4927L4.5854 11.9169Z"
    fill="#FBBC04"/>
<path
    d="M10.1999 3.95805C11.6256 3.936 13.0035 4.47247 14.036 5.45722L16.8911 2.60218C15.0833 0.904587 12.6838 -0.0287217 10.1999 0.000673888C6.41892 0.000673888 2.96126 2.13185 1.26367 5.51234L4.58537 8.08813C5.37537 5.71811 7.59106 3.95805 10.1999 3.95805Z"
    fill="#EA4335"/>
</g>
<defs>
<clipPath id="clip0_1003_6425">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
</span>)}

            {children}
        </button>
    );
});
