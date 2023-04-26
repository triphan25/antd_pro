import { Col, Row } from 'antd';
import AccountProfile from './components/Profile';
import { ConfigProvider } from 'antd';
import viVNIntl from 'antd/lib/locale/vi_VN';
import BaseTable from '@/components/BaseTable';

const dataSource = [
  {
    key: 1,
    name: 'Nguyễn Văn A',
    age: 20,
    class: 'CNTT',
    status: 'good',
  },
  {
    key: 2,
    name: 'Nguyễn Văn B',
    age: 25,
    class: 'CNTT',
    status: 'excellent',
  },
  {
    key: 3,
    name: 'Nguyễn Văn C',
    age: 19,
    class: 'CNTT',
    status: 'medium',
  },
];

const columns = [
  {
    title: 'Họ tên',
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: 'Tuổi',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
    search: false,
  },
  {
    title: 'Lớp',
    dataIndex: 'class',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Loại',
    dataIndex: 'status',
    initialValue: 'all',
    valueEnum: {
      all: { text: 'Tất cả', status: 'Default' },
      good: { text: 'Giỏi', status: 'Processing' },
      excellent: { text: 'Xuất sắc', status: 'Success' },
      medium: { text: 'Trung bình', status: 'Error' },
    },
  },
];

const AccountManage = () => {
  return (
    <ConfigProvider locale={viVNIntl}>
      <Row gutter={24}>
        <Col sm={8} xs={24}>
          <AccountProfile />
        </Col>
        <Col sm={8} xs={24}>
          <BaseTable data={dataSource} columns={columns} headerTitle="Danh sách sinh viên" />
        </Col>
      </Row>
    </ConfigProvider>
  );
};
export default AccountManage;
