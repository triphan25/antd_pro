import { setAuthority } from '@/utils/authority';
import { login } from '@/services/login';

const Model = {
  namespace: 'login',
  state: {
    status: undefined,
  },
  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(login, payload);
      // console.log(response)
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      }); // Login successfully
      // if (response.status === 'ok') {
      localStorage.setItem('token', response.token);
      localStorage.setItem('refreshToken', response.refreshToken);
      window.location.href = '/';
      // }
    },
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      window.location.href = '/user/login';
    },
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.currentAuthority);
      return { ...state, status: payload.status, type: payload.type };
    },
  },
};
export default Model;
