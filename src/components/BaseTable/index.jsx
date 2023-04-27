import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { ProTable, TableDropdown, ProColumns } from '@ant-design/pro-components';
import { Button } from 'antd';

const BaseTable = ({ data, columns, headerTitle }) => {
  return (
    <ProTable
      dataSource={data}
      rowKey="key"
      pagination={{
        showQuickJumper: true,
        showTotal: false,
      }}
      columns={columns}
      search={false}
      dateFormatter="string"
      headerTitle={headerTitle}
      options={{
        reload: false,
      }}
      // columnEmptyText="Không có data"
    />
  );
};

export default BaseTable;
