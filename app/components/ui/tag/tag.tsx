import { FC } from 'react';
import styles from './tag.module.scss';
import { TagProps } from './tag.props';

export const Tag: FC<TagProps> = ({ type, counts }: TagProps) => {
  switch (type) {
    case 'count':
      return <span className={styles.count}>{counts}M</span>;
    case 'km':
      return <span className={styles.km}>KM</span>;
  }
};
