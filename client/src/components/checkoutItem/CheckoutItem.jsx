import React from 'react';
import {connect} from 'react-redux';

import {
  addCartItem,
  clearItemFromCart,
  removeCartItem,
} from '../../redux/cart/cartActions';

import {
  CheckoutImageContainer,
  CheckoutItemContainer,
  QuantityContainer,
  RemoveButton,
  TextContainer,
} from './CheckoutItem.styles';

const CheckoutItem = ({
  cartItem,
  clearItemFromCart,
  addCartItem,
  removeCartItem,
}) => {
  const {id, name, imageUrl, price, qty} = cartItem;

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={imageUrl} alt='item' />
      </CheckoutImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div className='arrow' onClick={() => removeCartItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{qty}</span>
        <div className='arrow' onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButton onClick={() => clearItemFromCart(id)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (id) => dispatch(clearItemFromCart(id)),
  addCartItem: (item) => dispatch(addCartItem(item)),
  removeCartItem: (item) => dispatch(removeCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
