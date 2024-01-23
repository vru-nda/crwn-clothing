import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import CollectionOverViewContainer from '../../components/collectionOverview/CollectionOverViewContainer';
import WithSpinner from '../../components/withSpinner/withSpinner';
import CollectionPageContainer from '../collection/CollectionContainer';

import {fetchCollectionsStart} from '../../redux/shop/shopActions';

const ShopPages = ({match, fetchCollectionsStart}) => {
  // fetch the shop data
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route exact path={match.path} component={CollectionOverViewContainer} />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(WithSpinner(ShopPages));
