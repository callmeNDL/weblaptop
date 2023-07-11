import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userReducer';
import cardReducer from './card/cardReducer';
import checkoutReducer from './checkout/checkoutReducer';

const rootReducer = combineReducers({
  user: userReducer,
  itemCard: cardReducer,
  itemCheckout: checkoutReducer,
});

export default rootReducer;
