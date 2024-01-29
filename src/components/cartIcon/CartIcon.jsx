import './cartIcon.scss';

import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg.svg';

const CartIcon = ({toggleCartHidden, itemCount}) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

export default CartIcon;
