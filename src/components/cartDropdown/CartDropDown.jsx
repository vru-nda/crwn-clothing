import './cartDropDown.scss';

import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../customButton/CustomButton';
import CartItem from '../cartItem/CartItem';
import {selectCartItems} from '../../redux/cart/cartSelectors';

const CartDropDown = ({cartItems}) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        <div className='cart-items-wrapper'>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropDown);
