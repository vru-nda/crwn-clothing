import './collectionOverview.scss';

import React, {useContext} from 'react';

import PreviewCollection from '../previewCollection/PreviewCollection';

import CollectionsContext from '../../context/collections/collectionsContext';

const CollectionOverview = () => {
  const collectionsMap = useContext(CollectionsContext);
  const collections = Object.keys(collectionsMap).map(
    (item) => collectionsMap[item]
  );

  return (
    <div className='collections-overview'>
      {collections.map(({id, ...collectionProps}) => (
        <PreviewCollection key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
