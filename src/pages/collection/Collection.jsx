import './collection.scss';

import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../../components/collectionItem/CollectionItem';
import {selectCollection} from '../../redux/shop/shopSelector';

const Collection = ({collections}) => {
  const {title, items} = collections;
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

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
