import React, { useRef } from 'react';
import BaseTable from '@/components/BaseTable';
import { WechatOutlined } from '@ant-design/icons';
import BaseModel from '@/components/BaseModel';
import ChatRoom from '@/components/ChatRoom';

const data = [
  {
    key: 1,
    block: 'EBST',
    floor: 'Tầng 2',
    positon: 'MB/9430',
    problem: 'Nhà bị nhỏ nước',
    title: 'Cần sửa chữa nhà',
    problemDate: '28/4/2023',
    status: 'Chưa xử lý',
    estimatedDate: '',
    requestCompletedDate: '5/5/2023',
    finishDate: '',
    level: 'Khẩn cấp',
    content: 'note sửa gấp',
    typeIncident: 'trời mưa',
    category: 'Loại 3',
    assets: 'Dieu',
    positionAssets: 'Hỏi chi',
    received: 'aaaa',
    reflector: 'Dieu',
    phone: '10',
    informationReflector: 'Tầng 7 Gigamal',
    creator: 'Dieu',
    handle: 'BQL',
    staff: 'Dieu',
  },
  {
    key: 2,
    block: 'Nhà của tôi',
    floor: 'Tầng 2',
    positon: 'MB/9430',
    problem: 'Nhà bị nhỏ nước',
    title: 'Cần sửa chữa nhà',
    problemDate: '28/4/2023',
    status: 'Chưa xử lý',
    estimatedDate: '',
    requestCompletedDate: '5/5/2023',
    finishDate: '',
    level: 'Khẩn cấp',
    content: 'note sửa gấp',
    typeIncident: 'trời mưa',
    category: 'Loại 3',
    assets: 'Dieu',
    positionAssets: 'Hỏi chi',
    received: 'aaaa',
    reflector: 'Dieu',
    phone: '10',
    informationReflector: 'Tầng 7 Gigamal',
    creator: 'Dieu',
    handle: 'BQL',
    staff: 'Dieu',
  },
  {
    key: 3,
    block: 'Nhà đơn lập',
    floor: 'Tầng 2',
    positon: 'MB/9430',
    problem: 'Nhà bị nhỏ nước',
    title: 'Cần sửa chữa nhà',
    problemDate: '28/4/2023',
    status: 'Chưa xử lý',
    estimatedDate: '',
    requestCompletedDate: '5/5/2023',
    finishDate: '',
    level: 'Khẩn cấp',
    content: 'note sửa gấp',
    typeIncident: 'trời mưa',
    category: 'Loại 3',
    assets: 'Dieu',
    positionAssets: 'Hỏi chi',
    received: 'aaaa',
    reflector: 'Dieu',
    phone: '10',
    informationReflector: 'Tầng 7 Gigamal',
    creator: 'Dieu',
    handle: 'BQL',
    staff: 'Dieu',
  },
  {
    key: 4,
    block: 'Nhà đơn lập',
    floor: 'Tầng 2',
    positon: 'MB/9430',
    problem: 'Nhà bị nhỏ nước',
    title: 'Cần sửa chữa nhà',
    problemDate: '28/4/2023',
    status: 'Chưa xử lý',
    estimatedDate: '',
    requestCompletedDate: '5/5/2023',
    finishDate: '',
    level: 'Khẩn cấp',
    content: 'note sửa gấp',
    typeIncident: 'trời mưa',
    category: 'Loại 3',
    assets: 'Dieu',
    positionAssets: 'Hỏi chi',
    received: 'aaaa',
    reflector: 'Dieu',
    phone: '10',
    informationReflector: 'Tầng 7 Gigamal',
    creator: 'Dieu',
    handle: 'BQL',
    staff: 'Dieu',
  },
];

const Operation = () => {
  const refDetail = useRef(null);
  const columns = [
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
      dataIndex: 'positon',
      search: false,
      width: 200,
    },
    {
      title: 'Mã sự cố',
      dataIndex: 'problem',
      search: false,
      width: 200,
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      search: false,
      width: 200,
    },
    {
      title: 'Ngày ghi nhận sự cố',
      dataIndex: 'problemDate',
      search: false,
      width: 200,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      search: false,
      width: 200,
    },
    {
      title: 'Ngày dự kiến hoàn thành',
      dataIndex: 'estimatedDate',
      search: false,
      width: 200,
    },
    {
      title: 'Ngày yêu cầu hoàn thành',
      dataIndex: 'requestCompletedDate',
      search: false,
      width: 200,
    },
    {
      title: 'Ngày hoàn thành',
      dataIndex: 'finishDate',
      search: false,
      width: 200,
    },
    {
      title: 'Mức độ',
      dataIndex: 'level',
      search: false,
      width: 200,
    },
    {
      title: 'Nội dung',
      dataIndex: 'content',
      search: false,
      width: 200,
    },
    {
      title: 'Loại sự cố',
      dataIndex: 'typeIncident',
      search: false,
      width: 200,
    },
    {
      title: 'Hạng mục',
      dataIndex: 'category',
      search: false,
      width: 200,
    },
    {
      title: 'Tên tài sản',
      dataIndex: 'assets',
      search: false,
      width: 200,
    },
    {
      title: 'Vị trí tài sản',
      dataIndex: 'positionAssets',
      search: false,
      width: 200,
    },
    {
      title: 'Nguồn tiếp nhận',
      dataIndex: 'received',
      search: false,
      width: 200,
    },
    {
      title: 'Người phản ánh',
      dataIndex: 'reflector',
      search: false,
      width: 200,
    },
    {
      title: 'Số điện thoại phản ánh',
      dataIndex: 'phone',
      search: false,
      width: 200,
    },
    {
      title: 'Thông tin người phản ánh',
      dataIndex: 'informationReflector',
      search: false,
      width: 200,
    },
    {
      title: 'Người tạo',
      dataIndex: 'creator',
      search: false,
      width: 200,
    },
    {
      title: 'Bộ phận xử lý',
      dataIndex: 'handle',
      search: false,
      width: 200,
    },
    {
      title: 'Nhân viên sử lý',
      dataIndex: 'staff',
      search: false,
      width: 200,
    },
    {
      title: '',
      fixed: 'right',
      key: 'option',
      valueType: 'option',
      width: 80,
      align: 'middle',
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
      <BaseTable data={data} columns={columns} headerTitle="Yêu cầu sửa chữa" />
      <BaseModel title="Chi tiết phản hồi" ref={refDetail}>
        <div style={{ height: '60vh', boxSizing: 'border-box' }}>
          <ChatRoom />
        </div>
      </BaseModel>
    </div>
  );
};

export default Operation;
