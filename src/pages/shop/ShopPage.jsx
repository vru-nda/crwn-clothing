import React from 'react';
import {Route} from 'react-router-dom';

import CollectionOverviewContainer from '../../components/collectionOverview/CollectionOverviewContainer';
import CollectionContainer from '../collection/CollectionContainer';

const ShopPages = ({match}) => {
  return (
    <div className='shop-page'>
      <Route exact path={match.path} component={CollectionOverviewContainer} />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
};

export default ShopPages;
