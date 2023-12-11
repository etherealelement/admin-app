'use client';
import { FC, useState } from 'react';
import './landing-checkbox.scss';
import { LandingCheckboxProps } from './landing-checkbox.props';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

export const LandingCheckbox: FC<LandingCheckboxProps> = ({
  about,
}: LandingCheckboxProps): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);

  const onChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  return (
    <Checkbox onChange={onChange} checked={checked}>
      {about}
    </Checkbox>
  );
};
