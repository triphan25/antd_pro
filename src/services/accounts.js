import { post, get } from '@/helpers/axios';
import { message } from 'antd';

export async function getAccountProfile() {
  try {
    const response = await get('auth/user');
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

export async function userChangePassword(params) {
  try {
    const response = await post('auth/changePassword', params);
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

export async function userUpdateInfor(params) {
  try {
    const response = await post('user?sendActivationMail=false', params);
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

export async function forgotPassword(params) {
  try {
    const response = await get('ebst/customer/reset-by-email', params);
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

export async function setPassword(params) {
  try {
    const response = await post('ebst/customer/reset-by-email', params);
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
