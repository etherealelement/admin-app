'use client';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import React from 'react';
import { Table, Typography, Form, Input, Popconfirm, Button } from 'antd';
import './dashboard.scss';
import {
  ColumnTypes,
  DashboardProps,
  DataType,
} from '@/app/components/dashboard/dashboard.props';
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from '@/app/redux';
import { useAddUserMutation } from '@/app/redux/store/register-api';
import { EditableRow } from '@/app/components/dashboard/editable/editable-row';
import { EditableCell } from '@/app/components/dashboard/editable/editable-cell';
import { InputSearchValueContext } from '@/app/pages/main-page/context/main-context';

export const Dashboard: FC<DashboardProps> = () => {
  // rtk hooks
  const inputValue = useContext(InputSearchValueContext);
  const { data = [], isLoading } = useGetUsersQuery(inputValue);
  const [addUser, { isError }] = useAddUserMutation();
  const [deleteProduct] = useDeleteUserMutation();

  const [dataState, stateDataState] = useState<DataType[]>([]);
  const dataSource = dataState.map((item) => ({ ...item, key: item.id }));
  const [count, setCount] = useState(11);
  const [newUserData, setNewUserData] = useState<DataType>();

  useEffect(() => {
    stateDataState(data);
  }, [data]);

  const handleAddUser = async (dataState: DataType) => {
    if (newUserData) {
      await addUser(newUserData).unwrap();
    }
  };

  const handleDelete = (id: React.Key) => {
    const newData = dataSource.filter((item) => item.id !== id);
    deleteProduct(id);
    stateDataState(newData);
  };
  const handleSave = (row: DataType) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.id === item.id);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setNewUserData(item);
    stateDataState(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const handleAdd = () => {
    const newData: DataType = {
      id: count,
      name: ``,
      username: '',
      company: {
        name: '',
      },
      email: '',
      website: '',
      phone: '',
      address: {
        city: '',
      },
    };
    stateDataState([...dataSource, newData]);
    setCount((e) => e + 1);
  };
  const columns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: any;
  })[] = [
    {
      title: 'Full name',
      dataIndex: 'name',
      key: 'id',
      width: '30%',
      editable: true,
      sorter: (a, b) => a.name.length - b.username.length,
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
      title: 'User name',
      dataIndex: 'username',
      editable: true,
      key: 'id',
      sorter: (a, b) => a.username.length - b.username.length,
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'id',
      editable: true,
      sorter: (a, b) => a.email.length - b.email.length,
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'id',
      editable: true,
      sorter: (a, b) => a.name.length - b.name.length,
      render: (text) => <a href={text}>{text}</a>,
    },

    {
      title: 'company',
      dataIndex: ['company', 'name'],
      editable: true,
      key: 'id',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'id',
      editable: true,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Location',
      dataIndex: ['address', 'city'],
      editable: true,
      key: 'id',
      sorter: (a, b) => a.email.length - b.email.length,
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
      title: 'save',
      dataIndex: 'operation',
      render: (_, record: { key: React.Key }) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to save?" onConfirm={handleAddUser}>
            <a>Save</a>
          </Popconfirm>
        ) : null,
    },
    {
      title: 'delete',
      dataIndex: 'operation',
      render: (_, record: { key: React.Key }) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];
  const defaultColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return (
    <div>
      {/*<input onChange={}></input>*/}
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add new user
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        size={'middle'}
        dataSource={dataSource}
        columns={defaultColumns as ColumnTypes}
      />
    </div>
  );
};
