'use client';
import {FC, useContext, useEffect, useState} from 'react';
import cn from 'classnames';
import styles from './sidebar-select.module.scss';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
    withStyles,

} from '@mui/material';

import { SidebarSelectProps } from './sidebar-select.props';
import {log} from "node:util";
import {InputSearchValueHandlerContext} from "@/app/pages/main-page/context/main-context";

export const SidebarSelect: FC<SidebarSelectProps> = ({
    websiteData,
  name,
}: SidebarSelectProps): JSX.Element => {
  const [locationName, setLocationName] = useState<string>('');
  const setValueContext = useContext(InputSearchValueHandlerContext);

  const handleChange = (e: SelectChangeEvent) => {
    setLocationName(e.target.value);
  };

    useEffect(() => {
        setValueContext(locationName)
    }, [locationName]);




  return (
    <div className={styles.select}>
      <FormControl sx={{ width: 204, marginTop: 1 }} size="small">
        <InputLabel>{name}</InputLabel>
        <Select
            styles={{
              ...styles,
              control: base => ({
                ...base,
                boxShadow: `0 0 0 1px 'orange'`,
              }),
            }}
          labelId="input-select"
          id="input-select-id"
          value={locationName}
          label={name}
            onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
            {websiteData && websiteData.map(item => <MenuItem key={item.id} value={item.website} onClick={() => handleChange}>{item.website}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
};

