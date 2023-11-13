import { FC } from 'react';
import styles from './hero.module.scss';
import Image from 'next/image';

export const Hero: FC = (): JSX.Element => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.decor}>
          <Image
            src={'/Login/mask.png'}
            alt="image"
            width={400}
            height={720}
          ></Image>
          <Image
            src={'/Login/1.png'}
            alt="image"
            width={178}
            height={390}
            className={styles.block1}
          ></Image>
          <Image
            src={'/Login/2.png'}
            alt="image"
            width={289}
            height={132}
            className={styles.block2}
          ></Image>
          <Image
            src={'/Login/3.png'}
            alt="image"
            width={200}
            height={345}
            className={styles.block3}
          ></Image>
        </div>
      </div>
    </div>
  );
};
