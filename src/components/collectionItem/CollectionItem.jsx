import React, {useContext} from 'react';

import './collectionItem.scss';

import {CartContext} from '../../providers/cart/cartProvider';
import CustomButton from '../customButton/CustomButton';

const CollectionItem = ({item}) => {
  const {addItem} = useContext(CartContext);
  const {name, imageUrl, price} = item;

  return (
    <div className='collection-item'>
      <div className='image' style={{backgroundImage: `url(${imageUrl})`}} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
