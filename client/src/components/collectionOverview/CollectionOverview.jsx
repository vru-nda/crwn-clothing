import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCollectionsForPreview} from '../../redux/shop/shopSelector';

import PreviewCollection from '../previewCollection/PreviewCollection';
import {CollectionOverviewContainer} from './collectionOverview.styles';

const CollectionOverview = ({collections}) => {
  return (
    <CollectionOverviewContainer>
      {collections.map(({id, ...collectionProps}) => (
        <PreviewCollection key={id} {...collectionProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
