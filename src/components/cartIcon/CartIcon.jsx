import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {toggleCartHidden} from '../../redux/cart/cartActions';
import {selectCartItemsCount} from '../../redux/cart/cartSelectors';

import {CartIconContainer, ItemCount, ShoppingIcon} from './cartIcon.styles';

const CartIcon = ({toggleCartHidden, itemCount}) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapStateToDispatch = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapStateToDispatch)(CartIcon);
