import { createContext, useState } from 'react';
import { getCurrentUser } from '@/helpers/authHelper';
import React from 'react';
import { get_all_device } from '@/mock/listDevice';
import { message } from 'antd';
import { get_token } from './refresh';
import { useEffect } from 'react';
const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const user = getCurrentUser();

  const [loading, setLoading] = useState(false);
  const [devices, setDevices] = useState([]);
  const [refresh,setRefresh]= useState(false);
  // const [userJWTToken,setUserJWTToken] = useState(user.token);
  // const [fullJWTToken,setFullJWTToken] = useState('Bearer ' + user.token);
  // const [refreshJWTToken,setRefreshJWTToken] = useState(user.refreshToken);
  const userJWTToken = user.token;
  const fullJWTToken = 'Bearer ' + userJWTToken;
  const refreshJWTToken = user.refreshToken;
  // setTimeout(()=>{
  //   get_token(refreshJWTToken);

  // },5000)

  useState(async () => {
    setLoading(true);
    try {
      const result = await get_all_device();
      var devices = result.data;
      devices = devices.map((e: { created_time: any }) => {
        e.created_time = parseInt(e.created_time);
        return e;
      });
      setDevices(devices);
      // console.log(devices);
      // if (result !== null || result !== undefined) message.success('Kết nối thành công');
    } catch (error) {
      message.error(error.toString());
    }
    setLoading(false);
  }, []);

  const telemetryMessage = {
    refresh,
    setRefresh,
    fullJWTToken,
    userJWTToken,
    refreshJWTToken,
  };
  return <ThemeContext.Provider value={telemetryMessage}>{children}</ThemeContext.Provider>;
};
export { ThemeContext, ThemeProvider };
