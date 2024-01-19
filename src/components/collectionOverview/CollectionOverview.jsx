import './collectionOverview.scss';

import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCollectionsForPreview} from '../../redux/shop/shopSelector';
import PreviewCollection from '../previewCollection/PreviewCollection';

const CollectionOverview = ({collections}) => {
  return (
    <div className='collections-overview'>
      {collections.map(({id, ...collectionProps}) => (
        <PreviewCollection key={id} {...collectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
