import { FC } from 'react';
import styles from './sidebar.module.scss';
import { FilterLabel } from '../ui/filter-label/filter-label';
import { SidebarSelect } from '../ui/sidebar-select/sidebar-select';
import {SidebarInput} from "@/app/components/ui/sidebar-input/sidebar-input";
import {useGetUsersQuery} from "@/app/redux";

export const Sidebar: FC = (): JSX.Element => {

  const {data, isLoading} = useGetUsersQuery();


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
              Full name
            </FilterLabel>
            <SidebarInput name={"Search by full name"}></SidebarInput>
          </li>
          <li className={styles.sidebarInnerListItem}>
            <FilterLabel
                type="location"
                className={styles.sidebarInnerListItemLabel}
            >
              location
            </FilterLabel>
            <SidebarInput name={"Search by location"}></SidebarInput>
          </li>
          <li className={styles.sidebarInnerListItem}>
            <FilterLabel
                type="industry"
                className={styles.sidebarInnerListItemLabel}
            >
              Company
            </FilterLabel>
            <SidebarInput name={"Search by company"}></SidebarInput>
          </li>
          <li className={styles.sidebarInnerListItemLast}>
            <FilterLabel
                type="website"
                className={styles.sidebarInnerListItemLabel}
            >
              Website
            </FilterLabel>
            <SidebarSelect name="Choose website" websiteData={data}></SidebarSelect>
          </li>
        </ul>
      </div>
    </div>
  );
};
