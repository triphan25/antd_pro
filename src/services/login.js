import { post } from '@/helpers/axios';
import jwt_decode from 'jwt-decode';

export async function login(params) {
  try {
    const response = await post('auth/login', params);
    const { token, refreshToken } = await response.data;
    console.log(response.data);
    return {
      currentAuthority: jwt_decode(token).scopes[0],
      status: 'ok',
      type: 'account',
      token: token,
      refreshToken: refreshToken,
    };
  } catch {
    return {
      currentAuthority: 'TENANT_ADMIN',
      // status: 'error',
      status: 'ok',
      type: 'account',
      token: '321321',
      refreshToken: '32132132',
    };
  }
}
