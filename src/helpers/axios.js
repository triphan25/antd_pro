import axios from 'axios';
import { getCurrentUser } from './authHelper';
import _get from 'lodash/get';

const API_ROOT = 'https://localhost:8000/api';

const configCommon = (url) => ({
  url: `${API_ROOT}/${url}`,
  headers: {
    Authorization: `Bearer ${_get(getCurrentUser(), 'token')}`,
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
