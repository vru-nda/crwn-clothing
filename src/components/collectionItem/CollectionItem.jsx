import React from 'react';
import {connect} from 'react-redux';

import {addCartItem} from '../../redux/cart/cartActions';

import {
  AddButton,
  CollectionItemContainer,
  FooterContainer,
  ImageContainer,
  NameContainer,
  PriceContainer,
} from './collectionItem.styles';

const CollectionItem = ({item, addCartItem}) => {
  const {name, imageUrl, price} = item;
  return (
    <CollectionItemContainer>
      <ImageContainer className='image' imageUrl={imageUrl} />
      <FooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </FooterContainer>
      <AddButton inverted onClick={() => addCartItem(item)}>
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapStateToDispatch = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapStateToDispatch)(CollectionItem);
