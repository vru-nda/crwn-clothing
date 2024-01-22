import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';

import Collection from './Collection';

import {selectIsCollectionLoaded} from '../../redux/shop/shopSelector';
import WithSpinner from '../../components/withSpinner/withSpinner';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionPageContainer;
