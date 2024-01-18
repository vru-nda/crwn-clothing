import {cartActionTypes} from './cartTypes';
import {addItemToCart} from './cartUtils';

const INITAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case cartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
