"use client";
import {FC, useState} from 'react';
import React from "react";
import {Table, Typography} from "antd";
import type {ColumnsType, ColumnType, TableProps} from "antd/es/table";
import {DashboardProps, DataType} from "@/app/components/dashboard/dashboard.props";
import {useGetUsersQuery} from "@/app/redux";


const columns: ColumnsType<DataType> = [
    {
        title: 'Full name',
        dataIndex: 'name',
        key: 'id',
        sorter: (a, b) => a.name.length - b.username.length,
        render: (text) => <Typography.Text copyable>{text}</Typography.Text>
    },
    {
        title: 'User name',
        dataIndex: 'username',
        key: 'id',
        sorter: (a, b) => a.username.length - b.username.length,
    },
    {
        title: 'E-mail',
        dataIndex: 'email',
        key: 'id',
        sorter: (a, b) => a.email.length - b.email.length,
        render: (text) => <Typography.Text copyable>{text}</Typography.Text>
    },
    {
        title: 'Website',
        dataIndex: 'website',
        key: 'id',
        sorter: (a, b) => a.name.length - b.name.length,
        render: text => <a href={text}>{text}</a>
    },

    {
        title: 'company',
        dataIndex: ['company', "name"],
        key: 'id',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'id',
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: 'Location',
        dataIndex: ['address','city'],
        key: 'id',
        sorter: (a, b) => a.email.length - b.email.length,
        render: (text) => <Typography.Text copyable>{text}</Typography.Text>
    },
];


const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {

    console.log('params', pagination, filters, sorter, extra);
};

export const Dashboard: FC<DashboardProps> = () => {
    const {data, isLoading} = useGetUsersQuery();

    const dataSource = data.map(item => ({...item, key: item.id}));

    return <Table columns={columns}
                  dataSource={dataSource}
                  onChange={onChange}/>;
}