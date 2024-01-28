'use client';
import { FC, useEffect, useState } from 'react';
import React from 'react';
import {Table, Typography, Popconfirm, Button, DatePicker} from 'antd';
import './dashboard.scss';
import {
  ColumnTypes,
  DashboardProps,
    IProducts
} from '@/app/components/dashboard/dashboard.props';
import { EditableRow } from '@/app/components/dashboard/editable/editable-row';
import { EditableCell } from '@/app/components/dashboard/editable/editable-cell';
import shortid from "shortid";
import styles from "./dashboard.module.scss";
import { DashboardUsers } from './dashboard-users/dashboard-users';
import {useUnit} from "effector-react/effector-react.umd";
import {productDashboardData} from "@/app/services/product-service/products.service";


export const Dashboard: FC<DashboardProps> = ():JSX.Element => {
  const [productDataSource, setProductDataSource] = useState<IProducts[]>([]);
  const [createdDate, setCreatedDate] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");
  const [isProducts, setIsProducts] = useState<boolean>(true);
  const {data: products} = useUnit(productDashboardData.fetchProductsQuery);
  const id = shortid.generate();

  useEffect(() => {
    setProductDataSource(products.results.map( (item):IProducts => {
      return {
        key: item.id,
        ...item
        }
      }))
    }, [products]);
  

  const handleDelete = (id: string) => {
    const newData = productDataSource?.filter((item) => item.id !== id);
    setProductDataSource(newData);
  };

  const handleSave = (data: IProducts) => {
    const newData = [...productDataSource];
    const index = newData.findIndex((item) => data.id === item.id);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...data,
      created_at: createdDate,
      updated_at: updatedDate,
    });
    console.log(newData)
    setProductDataSource(newData);
    setCreatedDate("");
    setUpdatedDate("");
  };


  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  
  const handleAdd = () => {
    const newData: IProducts = {
      id: id,
      key: id,
      name: "",
      name_from_1c: "",
      price: "",
      description: "",
      created_at: "",
      updated_at: "",
      images: [],
      brand: {
        id: "",
        name: "",
        icon: "",
        margin: 0,
      }
    };
    setProductDataSource([...productDataSource, newData]);
  };

  const handleCreatedDateChange = (date: any, dateString: string) => {
      setCreatedDate(dateString);

  }

  const handleUpdatedDateChange = (date: any, dateString: string) => {
    setUpdatedDate(dateString)
  }


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
      sorter: (a, b) => a.name.replace(/\D/g, "") - b.name.replace(/\D/g, ""),
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
      title: 'Brand Name',
      dataIndex: ['brand','name'],
      key: '0',
      width: '20%',
      editable: true,
      sorter: (a, b) => a.brand.name - b.brand.name,
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      editable: true,
      key: 'id',
      sorter: (a, b) => a.price - b.price,
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
      title: 'Created at',
      dataIndex: 'created_at',
      key: 'id',
      editable: false,
      render: (text,record) => record.created_at ? record.created_at : <DatePicker onChange={handleCreatedDateChange}></DatePicker>
    },
    {
      title: 'Updated at',
      dataIndex: "updated_at",
      editable: false,
      key: 'id',
      render: (text,record) => record.created_at ? record.created_at : <DatePicker onChange={handleUpdatedDateChange}></DatePicker>
    },
    {
      title: 'save',
      dataIndex: 'operation',
      render: (_, record: { key: React.Key }) =>
          productDataSource.length >= 1 ? (
              <Popconfirm title="Sure to save?" onConfirm={() => {
                handleSave(record)
               product.addProduct(record)
              }}>
                <a>Save</a>
              </Popconfirm>
          ) : null,
    },
    {
      title: 'delete',
      dataIndex: 'operation',
      render: (_, record: { key: React.Key }) =>
      productDataSource.length >= 1 ? (
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
        <div className={styles.block}>
          <Button type='primary' shape="round" style={{marginRight: 16}} onClick={() => setIsProducts(true)}>
            show products
          </Button>
          <Button type='primary' shape="round" onClick={() => setIsProducts(false)}>
            show users
          </Button>
        </div>
        {isProducts ? <div className={styles.blockProducts}>
        <Button
            onClick={handleAdd} type="primary"
            style={{ marginBottom: 16 }}>
          Add new product
        </Button>
        <Table
            components={components}
            rowClassName={() => 'editable-row'}
            bordered
            size={'middle'}
            dataSource={productDataSource}
            columns={defaultColumns as ColumnTypes}
        />
      </div> : <div className={styles.blockUsers}>
      <DashboardUsers></DashboardUsers>
        </div>}
      </div>
  );
};

