import { Button, Typography } from 'antd';
import React, { useState, useEffect, useRef } from 'react';
import { Card, Row, Col, Form, Input, message, Modal } from 'antd';
const { Item } = Form;

const ChangePassword = ({ isOpen, onCloseChangePasswordModel }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [formReset] = Form.useForm();
  // const [isOpen, setOpen] = useState(false);

  // const showModal = () => {
  //   setOpen(true);
  // };
  // const hideModal = () => {
  //   setOpen(false);
  // };
  const handleOk = () => {
    formReset.submit();
  };
  // const handleCancel = () => {
  //   hideModal();
  // };

  return (
    <Form>
      <Row>
        <Col>
          {/* <Button danger onClick={showModal}>
            Đổi mật khẩu
          </Button> */}
          <Modal
            title={`Đổi mật khẩu`}
            visible={isOpen}
            onOk={handleOk}
            onCancel={onCloseChangePasswordModel}
            width={700}
            confirmLoading={loading}
          >
            <Form layout="horizontal" labelCol={{ span: 24 }} labelAlign="left">
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
  );
};

export default ChangePassword;
