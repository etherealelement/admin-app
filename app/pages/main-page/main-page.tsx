"use client";
import { FC } from 'react';
import {Sidebar} from "@/app/components/sidebar/sidebar";
import {AppHeader} from "@/app/components/header/header";
import styles from "./main-page.module.scss";

export const MainPage: FC = () => {
    return <div className={styles.gridContainer}>
        <div className={styles.sidebar}>
            <Sidebar></Sidebar>
        </div>
        <div className={styles.header}>
            <AppHeader></AppHeader>
        </div>
        <div className={styles.content}>
           Content
        </div>
        <div className={styles.footer}>
            Footer
        </div>
    </div>;
};