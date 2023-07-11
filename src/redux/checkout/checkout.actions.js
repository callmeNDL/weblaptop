import checkoutActionTypes from "./checkout.types";

export const setItemCheckout = (data) => {
  return {
    type: checkoutActionTypes.SET_ITEM_CHECKOUT,
    payload: data,
  };
};
