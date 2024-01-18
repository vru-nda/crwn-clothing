import React from 'react';
import {connect} from 'react-redux';

import './collectionItem.scss';

import CustomButton from '../customButton/CustomButton';
import {addCartItem} from '../../redux/cart/cartActions';

const CollectionItem = ({item, addCartItem}) => {
  const {name, imageUrl, price} = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{backgroundImage: `url(${imageUrl})`}} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={() => addCartItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapStateToDispatch = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapStateToDispatch)(CollectionItem);
