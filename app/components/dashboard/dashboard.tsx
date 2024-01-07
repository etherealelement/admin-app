'use client';
import { FC, useEffect, useState } from 'react';
import React from 'react';
import { Table, Typography, Popconfirm, Button } from 'antd';
import './dashboard.scss';
import {
  ColumnTypes,
  DashboardProps,
    IProducts
} from '@/app/components/dashboard/dashboard.props';
import {
  useDeleteUserMutation,
} from '@/app/redux';
import { useAddUserMutation } from '@/app/redux/store/register-api';
import { EditableRow } from '@/app/components/dashboard/editable/editable-row';
import { EditableCell } from '@/app/components/dashboard/editable/editable-cell';
import { InputSearchValueContext } from '@/app/pages/main-page/context/main-context';
import {observer} from "mobx-react-lite";
import product from "../../services/product.service";
import shortid from "shortid";



export const Dashboard: FC<DashboardProps> = observer(():JSX.Element => {
  // rtk hooks
  const [addUser, { isError }] = useAddUserMutation();
  const [deleteProduct] = useDeleteUserMutation();
  const [newProduct, setNewProduct] = useState<IProducts[]>([]);
  const id = shortid.generate();

  useEffect(() => {
    product.fetchProducts();
  }, [])


  const dataSource = product.products.map( (item) => {
    return {id: item.id,
      name: item.name, 
      key: item.id, 
      name_from_1c: item.name_from_1c,
      price: item.price,
      volume: item.volume,
      is_ready: item.is_ready,
      is_retail_allowed: item.is_retail_allowed,
      description: item.description,
      images: item.description,
      created_at: item.created_at,
      updated_at: item.updated_at,
      brand: {
        id: item.brand.id,
        name: item.brand.name,
        icon: item.brand.icon,
        margin: item.brand.margin
      }
    }
})
  
  const handleAddUser = async (dataState: IProducts) => {
    if (newUserData) {
      await addUser(newUserData).unwrap();
    }
  };

  const handleDelete = (id: React.Key) => {
    const newData = dataSource.filter((item) => item.id !== id);
    deleteProduct(id);
  };

  const handleSave = (row: IProducts[]) => {
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
      name: "", 
      id: id, 
      name_from_1c: "",
      price: "",
      description: "",
      created_at: "",
      updated_at: "",
      brand: {
        id: "",
        name: "",
        icon: "",
        margin: 0,
      }
    };
    setNewProduct([...dataSource, newData]);
  };
  const columns: (ColumnTypes[number] & {
    editable?: boolean;
    dataIndex: any;
  })[] = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'id',
      width: '20%',
      editable: true,
      sorter: (a, b) => a.name.length - b.username.length,
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
      title: 'Brand Name',
      dataIndex: ['brand','name'],
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
      title: 'Created at',
      dataIndex: 'created_at',
      key: 'id',
      editable: true,
      sorter: (a, b) => a.created.length - b.created.length,
    },
    {
      title: 'Updated at',
      dataIndex: "updated_at",
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
          Add new product
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

