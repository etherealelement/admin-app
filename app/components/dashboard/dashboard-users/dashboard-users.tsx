import { FC, useEffect, useState } from 'react';
import styles from "./dashboard-users.module.scss";
import { IUser } from './dashboard-users.props';
import shortid from "shortid";
import { observer } from 'mobx-react-lite';
import users from "../../../services/users-service/users.service";
import { EditableRow } from '@/app/components/dashboard/editable/editable-row';
import { EditableCell } from '@/app/components/dashboard/editable/editable-cell';


export const DashboardUsers: FC = observer((): JSX.Element => {
  const [productDataSource, setProductDataSource] = useState<IUser[]>([]);
  const [createdDate, setCreatedDate] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");
  const id = shortid.generate();

  useEffect(() => {
    users.fetchUsers();

    setProductDataSource(users.users.map( (item) => {
      return {id: item.id,
        key: item.id,
        username: item.username,
        email: item.email,
        phone: item.phone,
      }
    } ))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users.users]);


  const handleDelete = (id: string) => {
    const newData = productDataSource?.filter((item) => item.id !== id);
    users.deleteProducts(id);
    setProductDataSource(newData);
  };

  const handleSave = (data: IUser) => {
    const newData = [...productDataSource];
    const index = newData.findIndex((item) => data.id === item.id);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...data,
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


  return <div className={styles.dashboardUsers}></div>;
});