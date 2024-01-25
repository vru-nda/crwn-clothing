import './collectionOverview.scss';

import React from 'react';

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

export default CollectionOverview;
