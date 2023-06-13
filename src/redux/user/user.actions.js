import UserActionTypes from './user.types';

export const setCurrentUserAction = (loginData) => {
  console.log(loginData, 'loginData');
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: loginData,
  };
};

export const logoutCurrenUserAction = () => ({
  type: UserActionTypes.LOGOUT_CURRENT_USER,
});
