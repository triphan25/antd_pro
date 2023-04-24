import { get, post } from '@/helpers/axios';
import { handleLogout } from '@/helpers/authHelper';

export async function get_cyn() {
  try {
    const response = await get('cny');
    return response.data;
  } catch (error) {
    let err = error.toString();
    if (error.response) {
      const status = error.response.status;
      if (status === 400) {
        err.errorMsg = 'Check your input!';
      } else if (status === 401) {
        return handleLogout();
      } else if (status === 403) {
        return handleLogout();
      }
    }
    throw Error(err);
  }
}

export async function update_cyn(params) {
  try {
    const response = await post(`cny/update`, params);
    return response.data;
  } catch (error) {
    let err = error.toString();
    if (error.response) {
      const status = error.response.status;
      if (status === 400) {
        err.errorMsg = 'Check your input!';
      } else if (status === 401) {
        return handleLogout();
      } else if (status === 403) {
        return handleLogout();
      } else if (status === 500) {
        err.errorMsg = 'Server Error! Please try again!';
      }
    }
    throw Error(err);
  }
}
