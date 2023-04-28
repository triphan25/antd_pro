import React from 'react';
import BaseTable from '@/components/BaseTable';

const data = [
  {
    key: 1,
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

const columns = [
  // {
  //   title: 'Trạng thái',
  //   dataIndex: 'status',
  //   render: (_) => <a>{_}</a>,
  //   search: false,
  // },
  {
    title: 'Khối',
    dataIndex: 'block',
    search: false,
  },
  {
    title: 'Tầng/lầu',
    dataIndex: 'floor',
    search: false,
  },
  {
    title: 'Mã vị trí',
    dataIndex: 'positon',
    search: false,
  },
  {
    title: 'Mã sự cố',
    dataIndex: 'problem',
    search: false,
  },
  {
    title: 'Tiêu đề',
    dataIndex: 'title',
    search: false,
  },
  {
    title: 'Ngày ghi nhận sự cố',
    dataIndex: 'problemDate',
    search: false,
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    search: false,
  },
  {
    title: 'Ngày dự kiến hoàn thành',
    dataIndex: 'estimatedDate',
    search: false,
  },
  {
    title: 'Ngày yêu cầu hoàn thành',
    dataIndex: 'requestCompletedDate',
    search: false,
  },
  {
    title: 'Ngày hoàn thành',
    dataIndex: 'finishDate',
    search: false,
  },
  {
    title: 'Mức độ',
    dataIndex: 'level',
    search: false,
  },
  {
    title: 'Nội dung',
    dataIndex: 'content',
    search: false,
  },
  {
    title: 'Loại sự cố',
    dataIndex: 'typeIncident',
    search: false,
  },
  {
    title: 'Hạng mục',
    dataIndex: 'category',
    search: false,
  },
  {
    title: 'Tên tài sản',
    dataIndex: 'assets',
    search: false,
  },
  {
    title: 'Vị trí tài sản',
    dataIndex: 'positionAssets',
    search: false,
  },
  {
    title: 'Nguồn tiếp nhận',
    dataIndex: 'received',
    search: false,
  },
  {
    title: 'Người phản ánh',
    dataIndex: 'reflector',
    search: false,
  },
  {
    title: 'Số điện thoại phản ánh',
    dataIndex: 'phone',
    search: false,
  },
  {
    title: 'Thông tin người phản ánh',
    dataIndex: 'informationReflector',
    search: false,
  },
  {
    title: 'Người tạo',
    dataIndex: 'creator',
    search: false,
  },
  {
    title: 'Bộ phận xử lý',
    dataIndex: 'handle',
    search: false,
  },
  {
    title: 'Nhân viên sử lý',
    dataIndex: 'staff',
    search: false,
  },
];

const Operation = () => {
  return (
    <div>
      <BaseTable data={data} columns={columns} headerTitle="Yêu cầu sửa chữa" />
    </div>
  );
};

export default Operation;
