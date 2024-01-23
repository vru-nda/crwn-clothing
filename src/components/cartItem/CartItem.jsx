import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  NameContainer,
} from './cartItem.styles';

const CartItem = ({cartItem: {imageUrl, price, name, qty}}) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetailsContainer>
        <NameContainer>{name}</NameContainer>
        <span className='price'>
          {qty} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
