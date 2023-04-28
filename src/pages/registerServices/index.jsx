import React, { useRef } from 'react';
import BaseTable from '@/components/BaseTable';
import { WechatOutlined } from '@ant-design/icons';
import BaseModel from '@/components/BaseModel';
import ChatRoom from '@/components/ChatRoom';

const data = [
  {
    key: 1,
    status: 'Đã đăng ký',
    block: 'block test',
    floor: 'b1',
    positon_floor: 'MB/57324',
    customerName: 'Nguyễn Văn A',
    registrationService: 'Đăng ký BBQ',
    startDate: '20/03/3023',
    registerDate: '18/03/2023',
    number: '10,000',
    months: 5,
    price: '200,000',
    totalPrice: '400,000',
    note: 'Đi muộn 10p',
  },
  {
    key: 2,
    status: 'Đã hủy',
    block: 'block test',
    floor: 'b1',
    positon_floor: 'MB/590924',
    customerName: 'Trần Văn A',
    registrationService: 'Đăng ký BBQ',
    startDate: '20/03/3023',
    registerDate: '18/03/2023',
    number: '100,000',
    months: 7,
    price: '2000,000',
    totalPrice: '4000,000',
    note: 'Đi muộn 20p',
  },
  {
    key: 3,
    status: 'Khách hàng liên hệ qua app',
    block: 'block test',
    floor: 'c1',
    positon_floor: 'MB/50924',
    customerName: 'Nguyễn Văn C',
    registrationService: 'Đăng ký BBQ',
    startDate: '20/03/3023',
    registerDate: '18/03/2023',
    number: '10,000',
    months: 5,
    price: '200,000',
    totalPrice: '400,000',
    note: 'Đi muộn 10p',
  },
];

const RegisterServices = () => {
  const refDetail = useRef(null);

  const columns = [
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      // render: (_) => <a>{_}</a>,
      search: false,
      width: 200,
    },
    {
      title: 'Khối',
      dataIndex: 'block',
      search: false,
      width: 200,
    },
    {
      title: 'Tầng/lầu',
      dataIndex: 'floor',
      search: false,
      width: 200,
    },
    {
      title: 'Mã vị trí',
      dataIndex: 'positon_floor',
      search: false,
      width: 200,
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'customerName',
      search: false,
      width: 200,
    },
    {
      title: 'Dịch vụ đăng ký',
      dataIndex: 'registrationService',
      search: false,
      width: 200,
    },
    {
      title: 'Ngày bắt đầu sử dụng',
      dataIndex: 'startDate',
      search: false,
      width: 200,
    },
    {
      title: 'Ngày đăng ký',
      dataIndex: 'registerDate',
      search: false,
      width: 200,
    },
    {
      title: 'Số lượng',
      dataIndex: 'number',
      search: false,
      width: 200,
    },
    {
      title: 'Số tháng',
      dataIndex: 'months',
      search: false,
      width: 200,
    },
    {
      title: 'Đơn giá',
      dataIndex: 'price',
      search: false,
      width: 200,
    },
    {
      title: 'Thành tiền',
      dataIndex: 'totalPrice',
      search: false,
      width: 200,
    },
    {
      title: 'Ghi chú',
      dataIndex: 'note',
      search: false,
      width: 200,
    },
    {
      title: '',
      fixed: 'right',
      key: 'option',
      valueType: 'option',
      width: 80,
      align: 'center',
      render: () => [
        <WechatOutlined
          style={{ color: 'rgb(113, 210, 193)', cursor: 'pointer', fontSize: '20px' }}
          onClick={() => refDetail.current.showModel()}
        />,
      ],
    },
  ];

  return (
    <div>
      <BaseTable data={data} columns={columns} headerTitle="Đăng ký dịch vụ, tiện ích" />

      <BaseModel title="Chi tiết đăng ký" ref={refDetail}>
        <div style={{ height: '60vh', boxSizing: 'border-box' }}>
          <ChatRoom />
        </div>
      </BaseModel>
    </div>
  );
};

export default RegisterServices;
