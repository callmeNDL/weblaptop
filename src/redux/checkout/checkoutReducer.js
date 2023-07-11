import checkoutActionTypes from "./checkout.types";

const INITIAL_STATE = {
  arrItem: []
};
const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case checkoutActionTypes.SET_ITEM_CHECKOUT:
      return {
        ...state,
        arrItem: [...action.payload]
      };

    default:
      return state;
  }
};

export default checkoutReducer;
