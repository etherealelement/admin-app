"use client";
import { FC } from 'react';
import {Layout, Space} from "antd";
import {Sider,Header,Content,Footer, siderStyle, headerStyle, contentStyle,footerStyle} from "@/app/pages/main-page/main-page.styles";
import {Sidebar} from "@/app/components/sidebar/sidebar";
import {AppHeader} from "@/app/components/header/header";

export const MainPage: FC = () => {
    return <Space direction={"vertical"} style={{width: "100%",minHeight: '100vh' }} >
        <Layout>
            <Sider style={siderStyle}>
                <Sidebar></Sidebar>
            </Sider>
            <Layout>
                <Header style={headerStyle}>
                    <AppHeader></AppHeader>
                </Header>
                <Content style={contentStyle}>Content</Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Layout>
    </Space>;
};