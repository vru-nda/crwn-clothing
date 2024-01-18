import './cartDropDown.scss';

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cartActions';
import {selectCartItems} from '../../redux/cart/cartSelectors';

import CartItem from '../cartItem/CartItem';
import CustomButton from '../customButton/CustomButton';

const CartDropDown = ({cartItems, history, dispatch}) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <div className='cart-items-wrapper'>
              <CartItem key={cartItem.id} cartItem={cartItem} />
            </div>
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
        <CustomButton
          onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
