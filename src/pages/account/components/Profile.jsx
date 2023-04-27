import { Button, Typography } from 'antd';
import React, { useState, useEffect, useRef } from 'react';
import { Card, Row, Col, Form, Input, message, Modal } from 'antd';
const { Item } = Form;
import moment from 'moment';
const { Text } = Typography;

import { userUpdateInfor } from '@/services/accounts';
import { getAccountProfile } from '@/services/accounts';
import { userChangePassword } from '@/services/accounts';
import BaseModel from '@/components/BaseModel';
import BaseInput from '@/components/BaseInput';
import BaseSelect from '@/components/BaseSelect';

const AccountProfile = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [formReset] = Form.useForm();
  const [user, setUser] = useState({});
  const [isOpen, setOpen] = useState(false);
  const modelRef = useRef(null);
  const options = [
    { label: 'Tất cả', value: 'all' },
    { label: 'Mở', value: 'open' },
    { label: 'Đóng', value: 'closed' },
    { label: 'Xử lý', value: 'processing' },
  ];

  const handleChange = (e) => {
    console.log('ggsgsg', e);
  };

  const refreshData = async () => {
    try {
      setLoading(true);
      const result = await getAccountProfile();
      setUser(result);
      // if (result !== null || result !== undefined) message.success('Kết nối thành công');
    } catch (error) {
      message.error(error.toString());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const handleOk = () => {
    formReset.submit();
  };
  const handleCancel = () => {
    hideModal();
  };

  return (
    <Card loading={loading} title={'Thông tin tài khoản'}>
      <Form
        initialValues={user}
        layout="horizontal"
        labelCol={{ span: 24 }}
        labelAlign="left"
        form={form}
        onFinish={async (value) => {
          try {
            const req_value = { ...user, ...value };
            setLoading(true);
            await userUpdateInfor(req_value);
            message.success('Thành công');
          } catch (error) {
            message.error(error.toString());
          } finally {
            setLoading(false);
          }
        }}
      >
        <Row gutter={5}>
          <Col className="gutter-row" md={24}>
            {user?.additionalInfo?.lastLoginTs ? (
              <>
                <Text type="secondary">Đăng nhập gần nhất: </Text>
                <Text code>
                  {moment(user?.additionalInfo?.lastLoginTs).format('HH:mm:ss DD/MM/YYYY')}
                </Text>
              </>
            ) : (
              <></>
            )}
          </Col>
          <Col className="gutter-row" md={24} style={{ marginTop: '10px' }}>
            <Item
              label="Email"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: 'Nhập email',
                },
              ]}
              name="email"
            >
              <Input type={'email'} />
            </Item>
          </Col>
          <Col className="gutter-row" md={24}>
            <Item
              label="Họ và tên đệm"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: 'Nhập họ và tên đệm',
                },
              ]}
              name="firstName"
            >
              <Input />
            </Item>
          </Col>
          <Col className="gutter-row" md={24}>
            <Item
              label="Tên"
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: 'Nhập tên',
                },
              ]}
              name="lastName"
            >
              <Input />
            </Item>
          </Col>
          <Col className="gutter-row" md={12}>
            <Button
              onClick={() => {
                form.submit();
              }}
              type="primary"
            >
              Lưu thay đổi
            </Button>
          </Col>
          <Col className="gutter-row" md={12}>
            <Button danger onClick={showModal}>
              Đổi mật khẩu
            </Button>
            <Modal
              title={`Đổi mật khẩu`}
              visible={isOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              width={800}
              confirmLoading={loading}
            >
              <Form
                layout="horizontal"
                labelCol={{ span: 24 }}
                labelAlign="left"
                form={formReset}
                onFinish={async (value) => {
                  try {
                    const { currentPassword, newPassword, retypeNewPassword } = value;
                    if (newPassword !== retypeNewPassword) {
                      return message.error('Mật khẩu và mật khẩu nhập lại không trùng khớp');
                    }
                    await userChangePassword({ currentPassword, newPassword });
                    message.success('Thành công');
                    hideModal();
                    formReset.resetFields();
                  } catch (error) {
                    message.error(error.toString());
                  } finally {
                  }
                }}
              >
                <Row gutter={5}>
                  <Col className="gutter-row" md={24}>
                    <Item
                      label="Mật khẩu hiện tại"
                      labelCol={{ span: 24 }}
                      rules={[
                        {
                          required: true,
                          message: 'Mật khẩu tối thiêu 8 ký tự, tối đa 40 ký tự',
                          min: 8,
                          max: 40,
                        },
                      ]}
                      name="currentPassword"
                    >
                      <Input type={'password'} />
                    </Item>
                  </Col>
                  <Col className="gutter-row" md={24}>
                    <Item
                      label="Mật khẩu mới"
                      labelCol={{ span: 24 }}
                      rules={[
                        {
                          required: true,
                          min: 8,
                          max: 40,
                          message: 'Mật khẩu tối thiêu 8 ký tự, tối đa 40 ký tự',
                        },
                      ]}
                      name="newPassword"
                    >
                      <Input type={'password'} />
                    </Item>
                  </Col>
                  <Col className="gutter-row" md={24}>
                    <Item
                      label="Nhập lại mật khẩu mới"
                      labelCol={{ span: 24 }}
                      rules={[
                        {
                          required: true,
                          min: 8,
                          max: 40,
                          message: 'Mật khẩu tối thiêu 8 ký tự, tối đa 40 ký tự',
                        },
                      ]}
                      name="retypeNewPassword"
                    >
                      <Input type={'password'} />
                    </Item>
                  </Col>
                </Row>
              </Form>
            </Modal>
          </Col>
        </Row>
      </Form>
      <Button onClick={(e) => modelRef.current.showModel()}>Open model</Button>
      <BaseModel
        title="text"
        ref={modelRef}
        submitter={{
          render: (props, defaultDoms) => {
            return [
              ...defaultDoms,
              <Button
                key="ok"
                onClick={() => {
                  props.submit();
                }}
              >
                test
              </Button>,
            ];
          },
        }}
      >
        text
      </BaseModel>

      <BaseInput name="test" label="test" onChange={(e) => console.log(e.target.value)} />
      <BaseSelect label="Code" name="code" onChange={handleChange} options={options} />
    </Card>
  );
};

export default AccountProfile;
