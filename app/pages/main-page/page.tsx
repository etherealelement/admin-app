"use client";
import {FC, useState} from 'react';
import {Sidebar} from "@/app/components/sidebar/sidebar";
import {AppHeader} from "@/app/components/header/header";
import styles from "./main-page.module.scss";
import {Dashboard} from "@/app/components/dashboard/dashboard";

import {Spinner} from "@/app/components/ui/spinner/spinner";
import {InputSearchValueContext, InputSearchValueHandlerContext} from "@/app/pages/main-page/context/main-context";

const MainPage: FC = () => {

    // search by name
    const [valueText, setValueText] = useState<string>("")

    // search by

    return <InputSearchValueContext.Provider value={valueText}>
        <InputSearchValueHandlerContext.Provider value={setValueText}>

            <div className={styles.gridContainer}>
                <div className={styles.sidebar}>
                    <Sidebar></Sidebar>
                </div>
                <div className={styles.header}>
                    <AppHeader></AppHeader>
                </div>
                <div className={styles.content}>
                    <div className={styles.contentInner}>
                        {false ? <Spinner></Spinner> : <Dashboard></Dashboard>}
                    </div>
                </div>
                <div className={styles.footer}>
                </div>
            </div>
        </InputSearchValueHandlerContext.Provider>
    </InputSearchValueContext.Provider>
};

export default MainPage