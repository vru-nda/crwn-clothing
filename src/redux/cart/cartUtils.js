// Add quantiy or increment it
export const addItemToCart = (cartItems, newCartItem) => {
  const exists = cartItems.find((item) => item.id === newCartItem.id);

  if (exists) {
    return cartItems.map((item) => {
      return newCartItem.id === item.id ? {...item, qty: item.qty + 1} : item;
    });
  } else {
    return [...cartItems, {...newCartItem, qty: 1}];
  }
};
