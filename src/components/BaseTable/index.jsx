import React from 'react';
import { ProTable, TableDropdown, ProColumns } from '@ant-design/pro-components';

const BaseTable = ({ data, columns, headerTitle }) => {
  return (
    <ProTable
      scroll={{ x: 'scroll' }}
      bordered
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
