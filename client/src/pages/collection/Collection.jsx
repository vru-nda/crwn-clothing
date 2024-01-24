import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../../components/collectionItem/CollectionItem';
import {selectCollection} from '../../redux/shop/shopSelector';

import {
  CollectionPageContainer,
  ItemsContainer,
  TitleContainer,
} from './collection.styles';

const Collection = ({collections}) => {
  const {title, items} = collections;
  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items?.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
