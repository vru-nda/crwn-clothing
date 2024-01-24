import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';

import WithSpinner from '../withSpinner/withSpinner';
import CollectionOverview from './CollectionOverview';

import {selectIsCollectionFetching} from '../../redux/shop/shopSelector';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverViewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverViewContainer;
