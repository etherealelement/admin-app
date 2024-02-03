import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import {Table} from "antd";

export interface DashboardProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    userData?: userInterface[]
}


export interface IResponseProducts {
    count: number
    next: any
    previous: any,
    results: IProducts[]
}

export interface IProducts {
    brandName?: {
        id: string;
        name: string,
        icon: string,
        margin: number,
    };
    id: string;
    key?: string;
    name: string
    name_from_1c: string
    price: string
    volume?: any
    is_ready?: boolean
    is_retail_allowed?: boolean
    description: string
    images?: any[]
    created_at: string
    updated_at: string
    brand: string;
}

export interface IBrand {
    id: string
    name: string
    icon: string
    margin: number
}

 interface userInterface {
    id: number,
    username: string;
    name: string;
    email: string;
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string,
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string,
    }
}

// Item interface

export interface Item {
    key: string;
    name: string;
    age: string;
    email: string;
    phone: string;
}

// EditableRowProps

export interface EditableRowProps {
    index: number;
}

// EditableCellProps

export interface EditableCellProps {
    title: React.ReactNode;
    editable: boolean;
    children: React.ReactNode;
    dataIndex: keyof Item;
    record: Item;
    handleSave: (record: Item) => void;
}


// EditableTableProps
export type EditableTableProps = Parameters<typeof Table>[0];


// DataTypeProps
export interface DataTypeProps {
    key: React.Key;
    name: string;
    age: string;
    address: string;
}


// Column Types
export type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;