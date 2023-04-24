import axios from 'axios';

const API_ROOT = 'https://iot.ebst.tech/api';
const configCommon = (url) => ({
  url: `${API_ROOT}/${url}`,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${_get(getCurrentUser(), 'token')}`,
  },
});

export const post = (url, params) => {
  var config = {
    ...configCommon(url),
    method: 'post',
    data: params,
  };
  return axios(config);
};

export const get = (url, params) => {
  var config = {
    ...configCommon(url),
    method: 'get',
    params: params,
  };
  return axios(config);
};

export async function get_token(_refreshTokens) {
  try {
    const user_param = {
      refreshToken: _refreshTokens,
    };
    const response = await post('auth/token', user_param);
    // console.log(response.data.token)
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('refreshToken', response.data.refreshToken);

    // return response.data;
  } catch (error) {}
}
