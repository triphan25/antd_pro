import { get, post } from '@/helpers/axios';
import { handleLogout } from '@/helpers/authHelper';

export async function get_all_device() {
  try {
    const response = await get('ebst/device/list');
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
