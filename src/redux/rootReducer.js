import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
