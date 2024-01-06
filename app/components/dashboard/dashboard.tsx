'use client';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import React from 'react';
import { Table, Typography, Form, Input, Popconfirm, Button } from 'antd';
import './dashboard.scss';
import {
  ColumnTypes,
  DashboardProps,
  IResponseProducts,
    IProducts
} from '@/app/components/dashboard/dashboard.props';
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from '@/app/redux';
import { useAddUserMutation } from '@/app/redux/store/register-api';
import { EditableRow } from '@/app/components/dashboard/editable/editable-row';
import { EditableCell } from '@/app/components/dashboard/editable/editable-cell';
import { InputSearchValueContext } from '@/app/pages/main-page/context/main-context';
import {observer} from "mobx-react-lite";
import product from "../../services/product.service";
import shortid from "shortid";



export const Dashboard: FC<DashboardProps> = observer(() => {
  // rtk hooks
  const [addUser, { isError }] = useAddUserMutation();
  const [deleteProduct] = useDeleteUserMutation();
  const [newUserData, setNewUserData] = useState<IProducts>();

  const id = shortid.generate();

  useEffect(() => {
    product.fetchProducts()
      }, []);

  const dataSource = product.products.map( (item) => ({...Object.values(item), key: item.id }))
  
  const handleAddUser = async (dataState: IProducts) => {
    if (newUserData) {
      await addUser(newUserData).unwrap();
    }
  };

  console.log(dataSource);

  const handleDelete = (id: React.Key) => {
    const newData = dataSource.filter((item) => item.id !== id);
    deleteProduct(id);
  };

  const handleSave = (row: IProducts) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.id === item.id);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setNewUserData(item);
    setProducts(newData);
  };


  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  
  const handleAdd = () => {
    const newData: IProducts = {
      id,
      name: "",
      name_from_1c: "",
      price: "",
      volume: "",
      description: "",
      created_at: "",
      updated_at: "",
      brand: {
        id,
        name: "",
        icon: "",
        margin: 0,
      }
    };
    setProducts([...dataSource, newData]);
  };
  const columns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: any;
  })[] = [
    {
      title: 'Product Name',
      dataIndex: '1',
      key: '0',
      width: '20%',
      editable: true,
      sorter: (a, b) => a.name.length - b.username.length,
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
      title: 'Brand Name',
      dataIndex: ['8','1'],
      key: '0',
      width: '20%',
      editable: true,
      sorter: (a, b) => a.name.length - b.username.length,
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      editable: true,
      key: 'id',
      sorter: (a, b) => a.username.length - b.username.length,
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
      title: 'Is Ready',
      dataIndex: 'ready',
      key: 'id',
      editable: true,
      sorter: (a, b) => a.ready.length - b.ready.length,
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
      title: "Is retail allowed",
      dataIndex: 'retail',
      key: 'id',
      editable: true,
      sorter: (a, b) => a.retail.length - b.retail.length,
      render: (text) => <a href={text}>{text}</a>,
    },

    {
      title: 'Description',
      dataIndex: ['price', 'retail'],
      editable: true,
      key: 'id',
    },
    {
      title: 'Created at',
      dataIndex: 'created',
      key: 'id',
      editable: true,
      sorter: (a, b) => a.created.length - b.created.length,
    },
    {
      title: 'Updated at',
      dataIndex: "updated",
      editable: true,
      key: 'id',
      sorter: (a, b) => a.updated.length - b.updated.length,
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
      onCell: (record: IProducts) => ({
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
});

