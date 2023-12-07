import { FC } from 'react';
import styles from './sidebar.module.scss';
import { FilterLabel } from '../ui/filter-label/filter-label';
import { SidebarSelect } from '../ui/sidebar-select/sidebar-select';
import {Box, TextField} from "@mui/material";
import {SidebarInput} from "@/app/components/ui/sidebar-input/sidebar-input";

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
            <SidebarInput></SidebarInput>
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
