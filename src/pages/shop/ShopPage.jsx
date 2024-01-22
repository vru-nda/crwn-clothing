import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import CollectionOverview from '../../components/collectionOverview/CollectionOverview';
import WithSpinner from '../../components/withSpinner/withSpinner';
import Collection from '../collection/Collection';

import {updateCollection} from '../../redux/shop/shopActions';

import {
  convertCollectionSnapshotToMap,
  firestore,
} from '../../firebase/firebaseUtils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

class ShopPages extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  // fetch the shop data
  componentDidMount() {
    const {updateCollection} = this.props;

    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot);
      updateCollection(collectionMap);
      this.setState({loading: false});
    });
  }

  render() {
    const {match} = this.props;
    const {loading} = this.state;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={match.path}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collection) => dispatch(updateCollection(collection)),
});

export default connect(null, mapDispatchToProps)(WithSpinner(ShopPages));
