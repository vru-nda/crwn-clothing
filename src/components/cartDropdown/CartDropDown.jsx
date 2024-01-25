import './cartDropDown.scss';

import React, {useContext} from 'react';
import {withRouter} from 'react-router-dom';

import {CartContext} from '../../providers/cart/cartProvider';

import CartItem from '../cartItem/CartItem';
import CustomButton from '../customButton/CustomButton';

const CartDropDown = ({history}) => {
  const {cartItems, toggleHidden} = useContext(CartContext);
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <div key={cartItem.id} className='cart-items-wrapper'>
              <CartItem key={cartItem.id} cartItem={cartItem} />
            </div>
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
        <CustomButton
          onClick={() => {
            history.push('/checkout');
            toggleHidden();
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      </div>
    </div>
  );
};

export default withRouter(CartDropDown);
