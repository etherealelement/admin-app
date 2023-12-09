import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import {Table} from "antd";

export interface DashboardProps extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    userData?: userInterface[]
}


export interface DataType {
    id: number,
    name: string;
    username: string;
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
    address: string;
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