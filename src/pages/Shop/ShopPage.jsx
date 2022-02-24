import React, { Component } from 'react';

import SHOP_DATA from './ShopData';
import PreviewCollection from '../../components/previewCollection/PreviewCollection';

export class ShopPages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...collectionProps }) => (
          <PreviewCollection key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPages;
