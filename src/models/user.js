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
      const { firstName, lastName, userId, avatar } = {
        firstName: 'tri',
        lastName: 'phan',
        userId: '321321',
        avatar: 'https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-71.jpg',
      };
      // const { firstName, lastName, userId } = jwt_decode(token);
      const response = {
        name: firstName + ' ' + lastName,
        userId,
        avatar,
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
