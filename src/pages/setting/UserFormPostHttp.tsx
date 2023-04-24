import axios from 'axios';
const UserFormPostHttp = ({
  JWT_TOKEN,
  deviceId,
  sensKey,
  sensValue,
}: {
  JWT_TOKEN: string;
  deviceId: string;
  sensKey: string;
  sensValue: number;
}) => {
  const myurl: string = `https://iot.ebst.tech/api/plugins/rpc/oneway/${deviceId}`;
  const myheader: { accept: string; Authorization: string } = {
    accept: 'application/json',
    Authorization: `${JWT_TOKEN}`,
  };
  let setObj: {
    set_clo?: number;
    set_turbi?: number;
    set_ph_high?: number;
    set_ph_low?: number;
  } = {};
  setObj[sensKey] = sensValue;
  const mydata: { method: string; params: object; timeout: number } = {
    method: 'set_state',
    params: setObj,
    timeout: 30000,
  };

  const option: { method: string; url: string; headers: object; data: object } = {
    method: 'post',
    url: myurl,
    headers: myheader,
    data: mydata,
  };
  axios(option);
  return null;
};
export default UserFormPostHttp;
