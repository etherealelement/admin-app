'use client';
import {FC, useContext, useState} from 'react';
import './landing-checkbox.scss';
import { LandingCheckboxProps } from './landing-checkbox.props';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import {CheckboxContext, CheckboxContextHandler} from "@/app/context/landing-context";

export const LandingCheckbox: FC<LandingCheckboxProps> = ({
  about,
}: LandingCheckboxProps): JSX.Element => {


  const checkBoxValue = useContext(CheckboxContext);
  const handleValue = useContext(CheckboxContextHandler);

  const onChange = (e: CheckboxChangeEvent) => {
    handleValue(e.target.checked);
  };

  return (
    <Checkbox onChange={onChange} checked={checkBoxValue}>
      {about}
    </Checkbox>
  );
};
