import React from 'react';
import { ProFormText } from '@ant-design/pro-components';

const BaseInput = ({
  value,
  name,
  label,
  placeholder = '',
  titleTooltip,
  onChange,
  required = false,
}) => {
  return (
    <ProFormText
      value={value}
      name={name}
      label={label}
      tooltip={titleTooltip}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  );
};

export default BaseInput;
