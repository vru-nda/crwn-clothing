import React from 'react';

import {CartItemContainer, ItemDetailsContainer} from './cartItem.styles';

const CartItem = ({cartItem: {imageUrl, price, name, qty}}) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetailsContainer>
        <nameContainer>{name}</nameContainer>
        <span className='price'>
          {qty} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
