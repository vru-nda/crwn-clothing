import React, {useContext} from 'react';

import {CartContext} from '../../providers/cart/cartProvider';

import './checkoutItem.scss';

const CheckoutItem = ({cartItem}) => {
  const {addItem, removeItem, clearItemFromCart} = useContext(CartContext);
  const {name, imageUrl, price, qty} = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{qty}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div
        onClick={() => clearItemFromCart(cartItem)}
        className='remove-button'
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;