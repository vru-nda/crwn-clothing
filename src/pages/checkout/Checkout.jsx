import './checkout.scss';

import React, {useContext} from 'react';

import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import StripeButton from '../../components/stripeButton/StripeButton';

import {CartContext} from '../../providers/cart/cartProvider';

const CheckoutPage = () => {
  const {cartItems, cartTotal} = useContext(CartContext);
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${cartTotal}</div>
      <div className='test-warning'>
        *Please use the following test credit card details for payments*
        <br />
        4242 4242 4242 4242 / any future data / any three digits
      </div>
      <StripeButton price={cartTotal} />
    </div>
  );
};

export default CheckoutPage;
