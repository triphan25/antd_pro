import React from 'react';
import {
  Select,
  InputNumber,
  DatePicker,
  Modal,
  Card,
  Form,
  Row,
  Col,
  Button,
  message,
  Input,
  Drawer,
  Space,
  Avatar,
  Typography,
} from 'antd';
import { UpCircleOutlined, DownCircleOutlined } from '@ant-design/icons';
const { Text, Link } = Typography;

type handleChangeType = {
  onHandleMaxChange: Function;
  onHandleMinChange: Function;
  min: number | string;
  max: number | string;
  preDown: number | string;
  preUp: number | string;
  unit: string;
};
const UserForm: React.FC<handleChangeType> = ({
  onHandleMaxChange,
  onHandleMinChange,
  min,
  max,
  preUp,
  preDown,
  unit,
}) => {
  const onMaxChange = (value: number | string) => {
    onHandleMaxChange(value);
  };
  const onMinChange = (value: number | string) => {
    onHandleMinChange(value);
  };
  return (
    <>
      <Row gutter={[10, 10]}>
        <Col className="gutter-row" sm={24} xs={24}>
          <Text strong>Giới hạn trên</Text>
        </Col>
        <Col className="gutter-row" sm={24} xs={24}>
          <InputNumber
            defaultValue={preUp}
            size="large"
            min={min}
            max={max}
            formatter={(value) => `${value}${unit}`}
            parser={(value) => value!.replace(`${unit}`, '')}
            style={{
              width: '100%',
            }}
            // prefix={<UpCircleOutlined />}
            onChange={onMaxChange}
          />
        </Col>
        <Col className="gutter-row" sm={24} xs={24}>
          <Text strong>Giới hạn dưới</Text>
        </Col>
        <Col className="gutter-row" sm={24} xs={24}>
          <InputNumber
            defaultValue={preDown}
            size="large"
            min={min}
            max={max}
            formatter={(value) => `${value}${unit}`}
            parser={(value) => value!.replace(`${unit}`, '')}
            style={{
              width: '100%',
            }}
            // prefix={<DownCircleOutlined />}
            onChange={onMinChange}
          />
        </Col>
      </Row>
    </>
  );
};
export default UserForm;
