import { FC } from 'react';
import styles from "./landing-footer.module.scss";
import "../../../globals.css";
export const LandingFooter: FC = () => {
    return <footer className={styles.footer}>
        <div className={"container"}>
            <div className={styles.footerInner}>
                <div className={styles.footerInnerLeft}>
                    <h2 className={styles.footerInnerLeftText}>Find and contact every potential customer in the
                        world</h2>
                </div>
                <ul className={styles.footerInnerList}>
                    <li className={styles.footerInnerListItem}>
                        <div className={styles.footerInnerListItemWrap}>
                            <p className={styles.text1}>300M+</p>
                            <p className={styles.text2}>contacts</p>
                        </div>
                    </li>
                    <li className={styles.footerInnerListItem}>
                        <div className={styles.footerInnerListItemWrap}>
                            <p className={styles.text1}>60M+</p>
                            <p className={styles.text2}>companies</p>
                        </div>
                    </li>
                    <li className={styles.footerInnerListItem}>
                        <div className={styles.footerInnerListItemWrap}>
                            <p className={styles.text1}>120M+</p>
                            <p className={styles.text2}>phone numbers</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </footer>;
};