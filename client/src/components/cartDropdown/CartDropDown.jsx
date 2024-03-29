import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cartActions';
import {selectCartItems} from '../../redux/cart/cartSelectors';

import CartItem from '../cartItem/CartItem';

import {
  CartDropdownButton,
  CartDropdownContainer,
  CartItemsContainer,
  CartItemsWrapper,
  EmptyMessage,
} from './cartDropDown.styles';

const CartDropDown = ({cartItems, history, dispatch}) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <div key={cartItem.id}>
              <CartItem key={cartItem.id} cartItem={cartItem} />
            </div>
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
