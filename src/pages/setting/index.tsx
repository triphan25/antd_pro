import {
  MinusCircleOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  PlusOutlined,
} from '@ant-design/icons';
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
} from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';

import { ConfigProvider } from 'antd';
import viVNIntl from 'antd/lib/locale/vi_VN';
import { Link } from 'umi';
import { history } from 'umi';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import UserForm from './UserForm';
import UserFormSinger from './UserFormSingle';
import { getCurrentUser } from '@/helpers/authHelper';
import UserFormPostHttp from './UserFormPostHttp';
import { get_all_device } from '@/mock/listDevice';
import {
  ID_DEVICE_CENTER,
  ID_DEVICE_GIENG1,
  ID_DEVICE_GIENG2,
  ID_DEVICE_GIENG3,
  ID_DEVICE_OUT,
} from '@/pages/qconfig';
import { GetSensorSetDevice } from '../dashboard/getDataDevice';

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [devices, setDevices] = useState([]);
  const [mount, setMount] = useState(true);
  const User = getCurrentUser();
  const userJWTToken = User.token;
  const fullJWTToken = 'Bearer ' + userJWTToken;
  // console.log(fullJWTToken)
  const phMaxSet: React.MutableRefObject<number> = useRef(0);
  const phMinSet: React.MutableRefObject<number> = useRef(0);
  const turBiSet: React.MutableRefObject<number> = useRef(0);
  const turBiSet2: React.MutableRefObject<number> = useRef(0);
  const cloSet: React.MutableRefObject<number> = useRef(0);
  const idDevice: React.MutableRefObject<string> = useRef('');

  const PumpDeviceOut: React.MutableRefObject<GetSensorSetDevice> = useRef(
    new GetSensorSetDevice(userJWTToken, idDevice.current),
  );

  useState(async () => {
    setLoading(true);
    try {
      const result = await get_all_device();
      var devices = result.data;
      devices = devices.map((e: { created_time: string | number }) => {
        e.created_time = parseInt(e.created_time);
        return e;
      });
      setDevices(devices);

      devices.map((currentValue: { name: string; id: string }, index: any, arr: any) => {
        if (currentValue.name === ID_DEVICE_CENTER) {
          idDevice.current = currentValue.id;
        }
      });

      PumpDeviceOut.current = new GetSensorSetDevice(userJWTToken, idDevice.current);
      // if (result !== null || result !== undefined) message.success('Kết nối thành công');
    } catch (error) {
      message.error(error.toString());
    }
    setLoading(false);
  }, []);
  PumpDeviceOut.current.getData();
  const clo: number = PumpDeviceOut.current.getCloSetState();
  const turbi: number = PumpDeviceOut.current.getTurbiSetState();
  const turbi2: number = PumpDeviceOut.current.getTurbiSetState2();
  const phHigh: number = PumpDeviceOut.current.getPhHighSetState();
  const phLow: number = PumpDeviceOut.current.getPhLowSetState();

  useEffect(() => {
    cloSet.current = clo;
    // console.log(clo);
  }, [clo]);
  useEffect(() => {
    turBiSet.current = turbi;
    //console.log(turbi);
  }, [turbi]);

  useEffect(() => {
    turBiSet2.current = turbi2;
    //console.log(turbi);
  }, [turbi2]);
  useEffect(() => {
    phMaxSet.current = phHigh;
    //console.log(turbi);
  }, [phHigh]);
  useEffect(() => {
    phMinSet.current = phLow;
    //console.log(turbi);
  }, [phLow]);
  useEffect(() => {
    (async () => {
      // console.log('re-render');
      await setMount(false);

      await setMount(true);
    })();
  }, [clo, turbi, turbi2, phHigh, phLow]);
  const onMaxPHChange = (value: number) => {
    // console.log('Max changed', value);
    phMaxSet.current = value;
  };
  const onMinPHChange = (value: number) => {
    // console.log('Min changed', value);
    phMinSet.current = value;
  };
  const handleTurbinChange = (value: number) => {
    // console.log('Turbin 1 changed', value);
    turBiSet.current = value;
  };
  const handleTurbinChange2 = (value: number) => {
    // console.log('Turbin 2 changed', value);
    turBiSet2.current = value;
  };
  const handleCloChange = (value: number) => {
    // console.log('Turbin Clo changed', value);
    cloSet.current = value;
  };
  const handleSubmit = () => {
    UserFormPostHttp({
      JWT_TOKEN: fullJWTToken,
      deviceId: idDevice.current,
      sensKey: 'set_clo',
      sensValue: cloSet.current,
    });
    UserFormPostHttp({
      JWT_TOKEN: fullJWTToken,
      deviceId: idDevice.current,
      sensKey: 'set_ph_high',
      sensValue: phMaxSet.current,
    });
    UserFormPostHttp({
      JWT_TOKEN: fullJWTToken,
      deviceId: idDevice.current,
      sensKey: 'set_ph_low',
      sensValue: phMinSet.current,
    });
    UserFormPostHttp({
      JWT_TOKEN: fullJWTToken,
      deviceId: idDevice.current,
      sensKey: 'set_turbidity_1',
      sensValue: turBiSet.current,
    });
    UserFormPostHttp({
      JWT_TOKEN: fullJWTToken,
      deviceId: idDevice.current,
      sensKey: 'set_turbidity_2',
      sensValue: turBiSet2.current,
    });
  };

  return (
    <ConfigProvider locale={viVNIntl}>
      <Row gutter={[10, 10]}>
        <Col className="gutter-row" md={24}>
          {mount && (
            <Card title="Độ PH" hoverable={true}>
              <UserForm
                onHandleMaxChange={onMaxPHChange}
                onHandleMinChange={onMinPHChange}
                min={0}
                max={15}
                preUp={phHigh}
                preDown={phLow}
                unit="pH"
              />
            </Card>
          )}
        </Col>
        <Col className="gutter-row" md={24}>
          {mount && (
            <Card title="Thông số độ đục">
              <Row gutter={[10, 10]}>
                <Col className="gutter-row" md={24} xs={24}>
                  <UserFormSinger
                    title="Độ đục 1"
                    max={200}
                    min={0}
                    onHandleChange={handleTurbinChange}
                    preValue={turbi}
                    unit="ntu"
                  />
                </Col>
                <Col className="gutter-row" md={24} xs={24}>
                  <UserFormSinger
                    title="Độ đục 2"
                    max={200}
                    min={0}
                    onHandleChange={handleTurbinChange2}
                    preValue={turbi2}
                    unit="ntu"
                  />
                </Col>
              </Row>
            </Card>
          )}
        </Col>
        <Col className="gutter-row" md={24}>
          {mount && (
            <Card title="Thông số Clo">
              <UserFormSinger
                title="Clo"
                max={40}
                min={0}
                onHandleChange={handleCloChange}
                preValue={clo}
                unit="ppm"
              />
            </Card>
          )}
        </Col>
        <Col className="gutter-row" md={24}>
          <Button
            type="primary"
            size="large"
            style={{
              width: '100%',
            }}
            onClick={handleSubmit}
          >
            Lưu cài đặt
          </Button>
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default Orders;
