import React from 'react';
import { ProFormText } from '@ant-design/pro-components';

const BaseInput = ({ name, label, placeholder = '', titleToolip, onChange, required = false }) => {
  return (
    <ProFormText
      name={name}
      label={label}
      tooltip={placeholder}
      placeholder={titleToolip}
      required={required}
      onChange={onChange}
    />
  );
};

export default BaseInput;
