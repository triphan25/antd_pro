import { Col, Row } from 'antd';
import AccountProfile from './components/Profile';
import { ConfigProvider } from 'antd';
import viVNIntl from 'antd/lib/locale/vi_VN';

const AccountManage = () => {
  return (
    <ConfigProvider locale={viVNIntl}>
      <Row gutter={24}>
        <Col sm={8} xs={24}>
          <AccountProfile />
        </Col>
      </Row>
    </ConfigProvider>
  );
};
export default AccountManage;
