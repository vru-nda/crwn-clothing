import React from 'react';
import {connect} from 'react-redux';

import './checkoutItem.scss';
import {
  addCartItem,
  clearItemFromCart,
  removeCartItem,
} from '../../redux/cart/cartActions';

const CheckoutItem = ({
  cartItem,
  clearItemFromCart,
  addCartItem,
  removeCartItem,
}) => {
  const {id, name, imageUrl, price, qty} = cartItem;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeCartItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{qty}</span>
        <div className='arrow' onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div onClick={() => clearItemFromCart(id)} className='remove-button'>
        &#10005;
      </div>
    </div>
  );
};

const mapStateToDispatch = (dispatch) => ({
  clearItemFromCart: (id) => dispatch(clearItemFromCart(id)),
  addCartItem: (item) => dispatch(addCartItem(item)),
  removeCartItem: (item) => dispatch(removeCartItem(item)),
});

export default connect(null, mapStateToDispatch)(CheckoutItem);
