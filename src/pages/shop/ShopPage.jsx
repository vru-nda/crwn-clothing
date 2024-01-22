import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionOverview from '../../components/collectionOverview/CollectionOverview';
import Collection from '../collection/Collection';

import {updateCollection} from '../../redux/shop/shopActions';

import {
  convertCollectionSnapshotToMap,
  firestore,
} from '../../firebase/firebaseUtils';

class ShopPages extends React.Component {
  unsubscribeFromSnapshot = null;

  // fetch the shop data
  componentDidMount() {
    const {updateCollection} = this.props;

    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot);
      updateCollection(collectionMap);
    });
  }

  render() {
    const {match} = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={match.path} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collection) => dispatch(updateCollection(collection)),
});

export default connect(null, mapDispatchToProps)(ShopPages);
