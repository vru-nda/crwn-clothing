import './cartItem.scss';
import React from 'react';

const CartItem = ({cartItem: {imageUrl, price, name, qty}}) => {
  return (
    <div className='cart-item'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {qty} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
