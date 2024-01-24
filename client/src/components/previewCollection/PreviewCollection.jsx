import React from 'react';

import CollectionItem from '../collectionItem/CollectionItem';

import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from './previewCollection.styles';

const PreviewCollection = ({title, items}) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
      {items
        .filter((_, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default PreviewCollection;
