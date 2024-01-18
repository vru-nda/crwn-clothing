import React from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import PreviewCollection from '../../components/previewCollection/PreviewCollection';
import {selectShopCollections} from '../../redux/shop/shopSelector';

const ShopPages = ({collections}) => (
  <div className='shop-page'>
    {collections.map(({id, ...collectionProps}) => (
      <PreviewCollection key={id} {...collectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPages);
