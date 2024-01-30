import React, {Suspense, lazy, useEffect} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import {fetchCollectionsStart} from '../../redux/shop/shopActions';

import Spinner from '../../components/spinner/Spinner';

const CollectionOverViewContainer = lazy(() =>
  import('../../components/collectionOverview/CollectionOverViewContainer')
);
const CollectionPageContainer = lazy(() =>
  import('../collection/CollectionContainer')
);

const ShopPages = ({match, fetchCollectionsStart}) => {
  // fetch the shop data
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <Suspense fallback={<Spinner />}>
      <div className='shop-page'>
        <Route
          exact
          path={match.path}
          component={CollectionOverViewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    </Suspense>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPages);
