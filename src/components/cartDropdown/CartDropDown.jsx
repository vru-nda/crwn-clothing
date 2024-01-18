import './cartDropDown.scss';

import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../customButton/CustomButton';
import CartItem from '../cartItem/CartItem';

const CartDropDown = ({cartItem}) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        <div className='cart-items-wrapper'>
          {cartItem.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = ({cart}) => ({
  cartItem: cart.cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
