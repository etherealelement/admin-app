'use client';
import { FC, useState } from 'react';
import cn from 'classnames';
import styles from './sidebar-select.module.scss';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  makeStyles,
} from '@mui/material';
import { SidebarSelectProps } from './sidebar-select.props';

export const SidebarSelect: FC<SidebarSelectProps> = ({
  name,
}: SidebarSelectProps): JSX.Element => {
  const [locationName, setLocationName] = useState<string>('');

  const handleChange = (e: SelectChangeEvent) => {
    setLocationName(e.target.value);
  };

  return (
    <div className={styles.select}>
      <FormControl sx={{ width: 204, marginTop: 1 }} size="small">
        <InputLabel>{name}</InputLabel>
        <Select
          sx={{
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: '#E7E8EF',
            },
            '& label': {
              fontSize: '10px',
            },
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
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
