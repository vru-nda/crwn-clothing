import './collection.scss';

import React, {useContext} from 'react';

import CollectionItem from '../../components/collectionItem/CollectionItem';

import CollectionsContext from '../../context/collections/collectionsContext';

const Collection = ({match}) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const {title, items} = collection;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items?.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
