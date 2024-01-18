import React from 'react';
import {connect} from 'react-redux';

import './checkoutItem.scss';
import {removeCartItem} from '../../redux/cart/cartActions';

const CheckoutItem = ({
  cartItem: {id, name, imageUrl, price, qty},
  removeCartItem,
}) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{qty}</span>
    <span className='price'>{price}</span>
    <div onClick={() => removeCartItem(id)} className='remove-button'>
      &#10005;
    </div>
  </div>
);

const mapStateToDispatch = (dispatch) => ({
  removeCartItem: (id) => dispatch(removeCartItem(id)),
});

export default connect(null, mapStateToDispatch)(CheckoutItem);
