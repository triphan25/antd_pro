import { ProForm, ProFormSelect } from '@ant-design/pro-components';
import { useState } from 'react';

const BaseSelect = (props) => {
  return (
    <ProFormSelect
      // value={value}
      onChange={props.onChange}
      name={props.name}
      label={props.label}
      options={props.options}
      fieldProps={{
        optionItemRender(item) {
          return item.label + ' - ' + item.value;
        },
      }}
    />
  );
};

export default BaseSelect;
