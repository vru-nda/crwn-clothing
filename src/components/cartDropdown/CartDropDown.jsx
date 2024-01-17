import React from 'react';

import './cartDropDown.scss';

import CustomButton from '../customButton/CustomButton';

const CartDropDown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

export default CartDropDown;
