import React, {createContext, useEffect, useState} from 'react';

import {
  addItemToCart,
  filterItemFromCart,
  removeItemFromItem,
  getCartItemsCount,
  getCartTotal,
} from '../../redux/cart/cartUtils';

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
  cartTotal: 0,
});

const CartProvider = ({children}) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const toggleHidden = () => setHidden(!hidden);

  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));

  const removeItem = (item) =>
    setCartItems(removeItemFromItem(cartItems, item));

  const clearItemFromCart = (item) =>
    setCartItems(filterItemFromCart(cartItems, item));

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        cartItemsCount,
        removeItem,
        clearItemFromCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
