import './cartDropDown.scss';

import React from 'react';
import {withRouter} from 'react-router-dom';

import CartItem from '../cartItem/CartItem';
import CustomButton from '../customButton/CustomButton';

const CartDropDown = ({cartItems, toggleCartHidden, history}) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        <div className='cart-items-wrapper'>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <span className='empty-message'>Your cart is empty</span>
          )}
        </div>
        <CustomButton
          onClick={() => {
            history.push('/checkout');
            toggleCartHidden();
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </div>
    </div>
  );
};

export default withRouter(CartDropDown);
