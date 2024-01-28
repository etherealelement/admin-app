import { FC, useEffect, useState } from 'react';
import styles from "./dashboard-users.module.scss";
import { IUser } from './dashboard-users.props';
import shortid from "shortid";
import { EditableRow } from '@/app/components/dashboard/editable/editable-row';
import { EditableCell } from '@/app/components/dashboard/editable/editable-cell';
import {Button, Popconfirm, Spin, Table, Typography} from 'antd';
import { ColumnTypes } from '../dashboard.props';
import {useUnit} from "effector-react";
import {usersDashboardApi} from "@/app/services/users-service/users.service";
import {createQuery} from "@farfetched/core";


export const DashboardUsers: FC = (): JSX.Element => {
  const [usersDataSource, setUsersDataSource] = useState<IUser[]>([]);
  const id = shortid.generate();
  const {data: users, pending} = useUnit(usersDashboardApi.fetchUsersQuery)

  useEffect(() => {
    setUsersDataSource(users.results.map( (item) => {
      return {
        key: item.id,
        ...item,
      }
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  console.log(usersDataSource)

  const handleAdd = () => {

  }

  const handleDelete = (id: string) => {
    const newData = usersDataSource?.filter((item) => item.id !== id);
    setUsersDataSource(newData);
  };

  const handleSave = (data: IUser) => {
    const newData = [...usersDataSource];
    const index = newData.findIndex((item) => data.id === item.id);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...data,
    });
    console.log(newData)
    setUsersDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };


  const columns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: any;
  })[] = [
    {
      title: 'User Name',
      dataIndex: 'username',
      key: 'id',
      width: '20%',
      editable: true,
      sorter: (a, b) => a.username.replace(/\D/g, "") - b.username.replace(/\D/g, ""),
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
      title: 'Email',
      dataIndex: "email",
      key: 'id',
      width: '20%',
      editable: true,
      sorter: (a, b) => a.email - b.email,
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      editable: true,
      key: 'id',
      sorter: (a, b) => a.phone - b.phone,
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
      title: 'save',
      dataIndex: 'operation',
      render: (_, record: { key: React.Key }) =>
          usersDataSource.length >= 1 ? (
              <Popconfirm title="Sure to save?" onConfirm={() => {
                handleSave(record)
              //  users.addProduct(record)
              }}>
                <a>Save</a>
              </Popconfirm>
          ) : null,
    },
    {
      title: 'delete',
      dataIndex: 'operation',
      render: (_, record: { key: React.Key }) =>
      usersDataSource.length >= 1 ? (
              <Popconfirm
                  title="Sure to delete?"
                  onConfirm={() => handleDelete(record.key as string)}
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
      onCell: (record: IUser) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });





  return <div className={styles.dashboardUsers}>
    {!users && <Spin>Loading...</Spin>}
    <Button
            onClick={handleAdd} type="primary"
            style={{ marginBottom: 16 }}>
          Add new user
        </Button>
        <Table
            components={components}
            rowClassName={() => 'editable-row'}
            bordered
            size={'middle'}
            dataSource={usersDataSource}
            columns={defaultColumns as ColumnTypes}
        />
      </div> 
};