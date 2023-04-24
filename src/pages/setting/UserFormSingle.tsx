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
  onHandleChange: Function;
  min: number | string;
  max: number | string;
  preValue: number | string;
  unit: string;
  title: string;
};
const UserFormSinger: React.FC<handleChangeType> = ({
  onHandleChange,
  min,
  max,
  preValue,
  unit,
  title,
}) => {
  const onChange = (value: number) => {
    onHandleChange(value);
  };

  return (
    <>
      <Row gutter={[0, 10]}>
        <Col className="gutter-row" sm={24} xs={24}>
          <Text strong>{title}</Text>
        </Col>
        <Col className="gutter-row" sm={24} xs={24}>
          <InputNumber
            defaultValue={preValue}
            size="large"
            min={min}
            max={max}
            formatter={(value) => `${value}${unit}`}
            parser={(value) => value!.replace(`${unit}`, '')}
            style={{
              width: '100%',
            }}
            onChange={onChange}
          />
        </Col>
      </Row>
    </>
  );
};
export default UserFormSinger;
