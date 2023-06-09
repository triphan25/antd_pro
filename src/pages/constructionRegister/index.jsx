import BaseTable from '@/components/BaseTable';
import React from 'react';

const ConstructionRegister = () => {
  const data = [
    {
      key: 1,
      block: 'block test',
      floor: 'tầng 1',
      positon: 'MB/1223',
      owner: 'Nguyễn Thị B',
      customer: 'Nguyễn Văn A',
      authorizedPerson: 'Trịnh Văn Tèo',
      authorizedPersonCode: '12345609440',
      authorizedPersonPhone: '0334234234',
      hstcNumber: '3434444',
      hstcDate: '20/11/2022',
      status: 'Tạo mới',
      contractors: 'Trần Lê Tệ',
      address: 'Thủ đức',
      representative: 'Lê Văn Nam',
      representativeCode: '23234234',
      representativePhone: '4534534534',
      startDate: '20/03/2023',
      endDate: '30/04/2023',
      constructionInsuranceMoney: 0,
      supervisor: 'Nguyễn Văn B',
      supervisorCode: '232134234',
      supervisorPhone: '3434234',
      content: 'tessstsstst',
      accountNumber: '234534534',
      bank: 'Vietcom bank',
      accountHolder: 'Trần Văn Tèo',
      transferDate: '30/03/2023',
      depositAmount: '1.000.000',
      importer: 'Nguyễn Văn Tí',
      importDate: '10/03/2023',
      updater: 'Nguyễn văn X',
      updatedDate: '30/04/2023',
    },
    {
      key: 2,
      block: 'block test',
      floor: 'tầng 1',
      positon: 'MB/1223',
      owner: 'Nguyễn Thị B',
      customer: 'Nguyễn Văn A',
      authorizedPerson: 'Trịnh Văn Tèo',
      authorizedPersonCode: '12345609440',
      authorizedPersonPhone: '0334234234',
      hstcNumber: '3434444',
      hstcDate: '20/11/2022',
      status: 'Tạo mới',
      contractors: 'Trần Lê Tệ',
      address: 'Thủ đức',
      representative: 'Lê Văn Nam',
      representativeCode: '23234234',
      representativePhone: '4534534534',
      startDate: '20/03/2023',
      endDate: '30/04/2023',
      constructionInsuranceMoney: 0,
      supervisor: 'Nguyễn Văn B',
      supervisorCode: '232134234',
      supervisorPhone: '3434234',
      content: 'tessstsstst',
      accountNumber: '234534534',
      bank: 'Vietcom bank',
      accountHolder: 'Trần Văn Tèo',
      transferDate: '30/03/2023',
      depositAmount: '1.000.000',
      importer: 'Nguyễn Văn Tí',
      importDate: '10/03/2023',
      updater: 'Nguyễn văn X',
      updatedDate: '30/04/2023',
    },
    {
      key: 3,
      block: 'block test',
      floor: 'tầng 1',
      positon: 'MB/1223',
      owner: 'Nguyễn Thị B',
      customer: 'Nguyễn Văn A',
      authorizedPerson: 'Trịnh Văn Tèo',
      authorizedPersonCode: '12345609440',
      authorizedPersonPhone: '0334234234',
      hstcNumber: '3434444',
      hstcDate: '20/11/2022',
      status: 'Tạo mới',
      contractors: 'Trần Lê Tệ',
      address: 'Thủ đức',
      representative: 'Lê Văn Nam',
      representativeCode: '23234234',
      representativePhone: '4534534534',
      startDate: '20/03/2023',
      endDate: '30/04/2023',
      constructionInsuranceMoney: 0,
      supervisor: 'Nguyễn Văn B',
      supervisorCode: '232134234',
      supervisorPhone: '3434234',
      content: 'tessstsstst',
      accountNumber: '234534534',
      bank: 'Vietcom bank',
      accountHolder: 'Trần Văn Tèo',
      transferDate: '30/03/2023',
      depositAmount: '1.000.000',
      importer: 'Nguyễn Văn Tí',
      importDate: '10/03/2023',
      updater: 'Nguyễn văn X',
      updatedDate: '30/04/2023',
    },
  ];

  const columns = [
    {
      title: 'Khối',
      dataIndex: 'block',
      search: false,
      width: 150,
      fixed: 'left',
    },
    {
      title: 'Tầng/lầu',
      dataIndex: 'floor',
      search: false,
      width: 100,
      fixed: 'left',
    },
    {
      title: 'Mã vị trí',
      dataIndex: 'positon',
      search: false,
      width: 100,
      fixed: 'left',
    },
    {
      title: 'Chủ sở hữu',
      dataIndex: 'owner',
      search: false,
      width: 200,
      fixed: 'left',
    },
    {
      title: 'Khách thuê',
      dataIndex: 'customer',
      search: false,
      width: 200,
    },
    {
      title: 'Người được ủy quyền',
      dataIndex: 'authorizedPerson',
      search: false,
      width: 200,
    },
    {
      title: 'CMND/CCCD/Hộ chiếu',
      dataIndex: 'authorizedPersonCode',
      search: false,
      width: 200,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'authorizedPersonPhone',
      search: false,
      width: 200,
    },
    {
      title: 'Số HSTC',
      dataIndex: 'hstcNumber',
      search: false,
      width: 200,
    },
    {
      title: 'Ngày HSTC',
      dataIndex: 'hstcDate',
      search: false,
      width: 200,
    },
    {
      title: 'Trạng thái hồ sơ',
      dataIndex: 'status',
      search: false,
      width: 150,
    },
    {
      title: 'Tên nhà thầu',
      dataIndex: 'contractors',
      search: false,
      width: 200,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      search: false,
      width: 200,
    },
    {
      title: 'Người đại diện',
      dataIndex: 'representative',
      search: false,
      width: 200,
    },
    {
      title: 'CMND/CCCD/Hộ chiếu',
      dataIndex: 'representativeCode',
      search: false,
      width: 200,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'representativePhone',
      search: false,
      width: 200,
    },
    {
      title: 'Ngày bắt đầu thi công',
      dataIndex: 'startDate',
      search: false,
      width: 200,
    },
    {
      title: 'Ngày kết thúc thi công',
      dataIndex: 'endDate',
      search: false,
      width: 200,
    },
    {
      title: 'Tiền bảo hiểm thi công',
      dataIndex: 'constructionInsuranceMoney',
      search: false,
      width: 200,
    },
    {
      title: 'Người giám sát thi công',
      dataIndex: 'supervisor',
      search: false,
      width: 200,
    },
    {
      title: 'CMND/CCCD/Hộ chiếu',
      dataIndex: 'supervisorCode',
      search: false,
      width: 200,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'supervisorPhone',
      search: false,
      width: 200,
    },
    {
      title: 'Nội dung thi công',
      dataIndex: 'content',
      search: false,
      width: 200,
    },
    {
      title: 'Số tài khoản',
      dataIndex: 'accountNumber',
      search: false,
      width: 200,
    },
    {
      title: 'Ngân hàng',
      dataIndex: 'bank',
      search: false,
      width: 200,
    },
    {
      title: 'Chủ tài khoản',
      dataIndex: 'accountHolder',
      search: false,
      width: 200,
    },
    {
      title: 'Ngày chuyển',
      dataIndex: 'transferDate',
      search: false,
      width: 200,
    },
    {
      title: 'Số tiền đặt cọc',
      dataIndex: 'depositAmount',
      search: false,
      width: 200,
    },
    {
      title: 'Người nhập',
      dataIndex: 'importer',
      search: false,
      width: 200,
    },
    {
      title: 'Ngày nhập',
      dataIndex: 'importDate',
      search: false,
      width: 200,
    },
    {
      title: 'Người sửa',
      dataIndex: 'updater',
      search: false,
      width: 200,
    },
    {
      title: 'Ngày sửa',
      dataIndex: 'updatedDate',
      search: false,
      width: 200,
    },
  ];

  return (
    <div>
      <BaseTable data={data} columns={columns} headerTitle="Đăng ký thi công" />
    </div>
  );
};

export default ConstructionRegister;
