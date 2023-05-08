import { query as queryUsers } from '@/services/user';
import jwt_decode from 'jwt-decode';

const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
    isChangePassword: false,
  },
  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      console.log('fetch', response);
      yield put({
        type: 'save',
        payload: response,
      });
    },

    *fetchCurrent(_, { call, put }) {
      const token = localStorage.getItem('token') || '';
      if (token == '') return {};
      const { firstName, lastName, userId } = {
        firstName: 'tri',
        lastName: 'phan',
        userId: '321321',
      };
      // const { firstName, lastName, userId } = jwt_decode(token);
      const response = {
        name: firstName + ' ' + lastName,
        userId,
      };
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },

    *openChangePasswordModel(_, { call, put }) {
      yield put({
        type: 'hanldeOpenChangePasswordModel',
      });
    },

    *closeChangePasswordModel(_, { call, put }) {
      yield put({
        type: 'hanldeCloseChangePasswordModel',
      });
    },
  },
  reducers: {
    saveCurrentUser(state, action) {
      return { ...state, currentUser: action.payload || {} };
    },
    changeNotifyCount(
      state = {
        currentUser: {},
      },
      action,
    ) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
    hanldeOpenChangePasswordModel(state, action) {
      return { ...state, isChangePassword: true };
    },
    hanldeCloseChangePasswordModel(state, action) {
      return { ...state, isChangePassword: false };
    },
  },
};
export default UserModel;
