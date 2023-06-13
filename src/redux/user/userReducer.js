import UserActionTypes from './user.types';

const INITIAL_STATE = {
  username: '',
  userId: '',
  accessToken: '',
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
