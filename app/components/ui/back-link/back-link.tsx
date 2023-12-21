import {FC} from "react";
import styles from "./back-link.module.scss";
import Link from "next/link";
export const BackLink:FC = () => {
    return <Link href={"/pages/auth-page"} className={styles.Link}>
                <span className={styles.forgotPasswordInnerSpan}>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd"
      d="M6.77519 0.558058C7.01927 0.802136 7.01927 1.19786 6.77519 1.44194L2.84214 5.375H14.6666C15.0118 5.375 15.2916 5.65482 15.2916 6C15.2916 6.34518 15.0118 6.625 14.6666 6.625H2.84214L6.77519 10.5581C7.01927 10.8021 7.01927 11.1979 6.77519 11.4419C6.53112 11.686 6.13539 11.686 5.89131 11.4419L0.89131 6.44194C0.647233 6.19786 0.647233 5.80214 0.89131 5.55806L5.89131 0.558058C6.13539 0.313981 6.53112 0.313981 6.77519 0.558058Z"
      fill="#B1B5C3"/>
</svg>

                </span>
        Back
    </Link>
}