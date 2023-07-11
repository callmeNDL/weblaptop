import CardActionTypes from './card.types';

export const addCardItem = (payload) => {
  return {
    type: CardActionTypes.ADD_CARD,
    payload: payload,
  };
};

export const decrementCardItem = (payload) => {
  return {
    type: CardActionTypes.DECREMENT_CARD,
    payload: payload,
  };
};

export const deleteCardItem = (payload) => {
  return {
    type: CardActionTypes.DELETE_CARD,
    payload: payload,
  };
};

export const deleteALlItem = () => {
  return {
    type: CardActionTypes.DELETE_ALL,
    payload: [],
  };
};

