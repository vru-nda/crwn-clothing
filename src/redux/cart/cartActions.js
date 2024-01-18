import {cartActionTypes} from './cartTypes';

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addCartItem = (item) => ({
  type: cartActionTypes.ADD_CART_ITEM,
  payload: item,
});

export const removeCartItem = (id) => ({
  type: cartActionTypes.REMOVE_CART_ITEM,
  payload: id,
});
