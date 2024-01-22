import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import CollectionOverViewContainer from '../../components/collectionOverview/CollectionOverViewContainer';
import WithSpinner from '../../components/withSpinner/withSpinner';
import CollectionPageContainer from '../collection/CollectionContainer';

import {fetchCollectionsStartAsync} from '../../redux/shop/shopActions';

class ShopPages extends React.Component {
  // fetch the shop data
  componentDidMount() {
    const {fetchCollectionsStartAsync} = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    const {match} = this.props;

    return (
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
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(WithSpinner(ShopPages));
