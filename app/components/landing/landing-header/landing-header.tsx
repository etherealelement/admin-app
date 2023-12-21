import { FC } from 'react';
import styles from './landing-header.module.scss';
import { IconLogo } from '@/app/components/ui/icons/icon-logo';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button/button';
import '../../../globals.css';
export const LandingHeader: FC = () => {
  return (
    <header className={styles.header}>
      <div className={'container'}>
        <div className={styles.headerInner}>
          <div className={styles.headerInnerLogo}>
            <Link href={'/'}>
              <IconLogo></IconLogo>
            </Link>
          </div>
          <nav className={styles.headerInnerNav}>
            <ul className={styles.headerInnerNavList}>
              <li className={styles.headerInnerNavListItem}>
                <Link
                  href={'/'}
                  className={styles.headerInnerNavListItemLinkActive}
                >
                  Schedule demo
                </Link>
              </li>
              <li className={styles.headerInnerNavListItem}>
                <Link
                  href={'/pages/auth-page'}
                  className={styles.headerInnerNavListItemLink}
                >
                  Login
                </Link>
              </li>
              <li className={styles.headerInnerNavListItem}>
                <Link href={'/pages/reg-page'}>
                  <Button type={'signup'}>Sign up for free</Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
