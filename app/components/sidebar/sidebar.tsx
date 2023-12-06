import { FC } from 'react';
import styles from './sidebar.module.scss';
import cn from 'classnames';
import { FilterLabel } from '../ui/filter-label/filter-label';
import { Input } from '../ui/input/Input';
import { SidebarSelect } from '../ui/sidebar-select/sidebar-select';

export const Sidebar: FC = (): JSX.Element => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarInner}>
        <div className={styles.sidebarInnerBox}>
          <h1 className={styles.sidebarInnerBoxLogo}>LOGO</h1>
          <h2 className={styles.sidebarInnerBoxFilter}>Filters</h2>
        </div>

        <ul className={styles.sidebarInnerList}>
          <li className={styles.sidebarInnerListItem}>
            <FilterLabel
              type="job"
              className={styles.sidebarInnerListItemLabel}
            >
              Job title
            </FilterLabel>
            <Input
              type="job"
              placeholder="Search by job title"
              size="small"
              className={styles.sidebarInnerListItemInput}
              style={{ width: 162 }}
            ></Input>
          </li>
          <li className={styles.sidebarInnerListItem}>
            <FilterLabel
              type="location"
              className={styles.sidebarInnerListItemLabel}
            >
              location
            </FilterLabel>
            <SidebarSelect name="Choose location"></SidebarSelect>
          </li>
          <li className={styles.sidebarInnerListItemLast}>
            <FilterLabel
              type="industry"
              className={styles.sidebarInnerListItemLabel}
            >
              industry
            </FilterLabel>
            <SidebarSelect name="Choose industry"></SidebarSelect>
          </li>
        </ul>
      </div>
    </div>
  );
};
