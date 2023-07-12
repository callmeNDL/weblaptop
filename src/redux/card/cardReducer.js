import CardActionTypes from './card.types';

const INITIAL_STATE = {
  cartAr: [],
};
const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardActionTypes.ADD_CARD:
      const productInCart = state.cartAr?.find(
        (p) => p.id === action.payload.id
      );
      if (!productInCart) {
        return {
          ...state,
          cartAr: [...state.cartAr, {
            ...action.payload,
            quantity: 1
          }],
        };
      } else {
        let newcart = [...state.cartAr];
        const objIndex = newcart.findIndex(
          (obj) => obj.id == action.payload.id
        );
        console.log(objIndex, 'objIndex');
        if (newcart[objIndex].quantity === undefined) {
          newcart[objIndex].quantity = 2;
        } else {
          newcart[objIndex].quantity = newcart[objIndex]?.quantity + 1;
        }

        return {
          ...state,
          cartAr: [...newcart]
        };
      }
    case CardActionTypes.DECREMENT_CARD:
      let cart = state.cartAr;
      const cartIndex = cart.findIndex((obj) => obj.id == action.payload.id);
      if (cart[cartIndex].quantity > 1) {
        cart[cartIndex].quantity = cart[cartIndex].quantity - 1;
      }
      return { cartAr: [...cart] };

    case CardActionTypes.DELETE_CARD:
      let listArrCard = state.cartAr;
      const objIndex = listArrCard.findIndex((cart) => cart.id == action.payload.id);
      if (objIndex !== 0) {
        listArrCard.splice(objIndex, 1);
      }
      return { cartAr: [...listArrCard] };

    case CardActionTypes.DELETE_ALL:
      return { cartAr: [] };

    default:
      return state;
  }
};

export default cardReducer;
