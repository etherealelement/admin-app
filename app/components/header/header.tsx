import { FC } from 'react';
import styles from './header.module.scss';
import { Tag } from '../ui/tag/tag';
import {useGetUsersQuery} from "@/app/redux";

export const AppHeader: FC = (): JSX.Element => {
    const {data = [], isLoading} = useGetUsersQuery();

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.headerInnerContainer}>
          <h1 className={styles.headerInnerContainerTotal}>Total</h1>
          <Tag type="count" counts={data.length}></Tag>
        </div>
        <Tag type="km"></Tag>
      </div>
    </header>
  );
};
