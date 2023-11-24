import { FC } from 'react';
import styles from './header.module.scss';
import { Tag } from '../ui/tag/tag';

export const Header: FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.headerInnerContainer}>
          <h1 className={styles.headerInnerContainerTotal}>Total</h1>
          <Tag type="count" counts={2}></Tag>
        </div>
        <Tag type="km"></Tag>
      </div>
    </header>
  );
};
