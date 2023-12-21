import React, {useContext} from 'react';
import { FC } from 'react';
import styles from './landing-hero.module.scss';
import { LandingInput } from '../../ui/landing/landing-input/landing-input';
import { LandingCheckbox } from '../../ui/landing/landing-checkbox/landing-checkbox';
import '../../../globals.css';

export const LandingHero: FC = (): JSX.Element => {




  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          {/* titles */}
          <div className={styles.heroInnerText}>
            <h1 className={styles.heroInnerTextTitle}>Find every customer</h1>
            <h2 className={styles.heroInnerTextSub}>in the world</h2>
          </div>
          {/* descr */}
          <div className={styles.heroInnerDescription}>
            <p className={styles.heroInnerDescriptionText}>
              Find, speak and onboard your deal client with over 300M contacts
            </p>
          </div>
          {/* emailinput */}
          <div className={styles.heroInnerInput}>
            <LandingInput placeholderText="Enter your work email"></LandingInput>
          </div>
          {/* checkboxes */}
          <div className={styles.heroInnerCheckboxes}>
            <LandingCheckbox about="By signing up, I agree with Terms & Conditions"></LandingCheckbox>
          </div>
        </div>
      </div>
    </section>
  );
};
