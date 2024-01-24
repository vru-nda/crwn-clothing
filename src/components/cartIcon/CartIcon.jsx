import './cartIcon.scss';

import React, {useContext} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg.svg';

import CartContext from '../../context/cart/cartContext';
import {selectCartItemsCount} from '../../redux/cart/cartSelectors';

const CartIcon = ({itemCount}) => {
  const {toggleHidden} = useContext(CartContext);

  return (
    <div className='cart-icon' onClick={toggleHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
