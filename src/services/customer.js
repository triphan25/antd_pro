import { post, get } from '@/helpers/axios';
import { message } from 'antd';

export async function list_customer(params) {
  try {
    const response = await get('customers', params);
    return response.data;
  } catch (error) {
    let err = error.toString();
    if (error.response) {
      const status = error.response.status;
      if (status === 400) {
        message.error(err);
      } else if (status === 401) {
        return handleLogout();
      } else if (status === 403) {
        message.error(err);
      }
    } else {
      message.error(err);
    }
    throw Error(err);
  }
}
