import {cartActionTypes} from './cartTypes';

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addCartItem = (item) => ({
  type: cartActionTypes.ADD_CART_ITEM,
  payload: item,
});

export const removeCartItem = (item) => ({
  type: cartActionTypes.REMOVE_CART_ITEM,
  payload: item,
});

export const clearItemFromCart = (id) => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: id,
});

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART,
});
