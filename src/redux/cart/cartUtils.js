// Add quantiy or increment it
export const addItemToCart = (cartItems, newCartItem) => {
  const exists = cartItems?.find((item) => item.id === newCartItem.id);

  if (exists) {
    return cartItems.map((item) =>
      newCartItem.id === item.id ? {...item, qty: item.qty + 1} : item
    );
  } else {
    return [...cartItems, {...newCartItem, qty: 1}];
  }
};

export const removeItemFromItem = (cartItems, cartItemToRemove) => {
  const exists = cartItems?.find((item) => item.id === cartItemToRemove.id);

  if (exists && exists.qty === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  } else {
    return cartItems.map((item) =>
      item.id === cartItemToRemove.id ? {...item, qty: item.qty - 1} : item
    );
  }
};

export const filterItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

export const getCartItemsCount = (cartItems) =>
  cartItems.reduce(
    (accumalatedQty, cartItem) => accumalatedQty + cartItem.qty,
    0
  );

export const getCartTotal = (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.qty * cartItem.price,
    0
  );
