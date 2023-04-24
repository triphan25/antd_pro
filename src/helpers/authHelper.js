import jwt_decode from 'jwt-decode';

export const handleLogout = () => {
  localStorage.clear();
  window.location.href = '/';
};

export const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken')
  // console.log(tokensRefresh)
  if (!token) return;
  // const { role, ...otherValue } = jwt_decode(token);
  const { role, ...otherValue } = (token);
  return {
    // role: jwt_decode(token).scopes[0],
    role: (token),
    token,
    refreshToken,
    ...otherValue,
  };
};
 