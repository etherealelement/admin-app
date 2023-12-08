"use client";
import { FC } from 'react';
import {Sidebar} from "@/app/components/sidebar/sidebar";
import {AppHeader} from "@/app/components/header/header";
import styles from "./main-page.module.scss";
import {Dashboard} from "@/app/components/dashboard/dashboard";
import {useGetUsersQuery} from "@/app/redux";
import {Spinner} from "@/app/components/ui/spinner/spinner";

export const MainPage: FC = () => {

    const {data = [], isLoading} = useGetUsersQuery()

    return <div className={styles.gridContainer}>
        <div className={styles.sidebar}>
            <Sidebar></Sidebar>
        </div>
        <div className={styles.header}>
            <AppHeader></AppHeader>
        </div>
        <div className={styles.content}>
           <div className={styles.contentInner}>
               {isLoading ?  <Spinner></Spinner> : <Dashboard></Dashboard>}
           </div>
        </div>
        <div className={styles.footer}>

        </div>
    </div>;
};