import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import PreviewCollection from '../previewCollection/PreviewCollection';
import CollectionOverview from './CollectionOverview';
import Spinner from '../spinner/Spinner';

const GET_COLLECTION = gql`
  {
    collections {
      id
      title
      items {
        id
        name
        imageUrl
        price
      }
    }
  }
`;

const CollectionOverviewContainer = () => (
  <Query query={GET_COLLECTION}>
    {({loading, _, data}) => {
      if (loading) return <Spinner />;
      return <CollectionOverview collections={data.collections} />;
    }}
  </Query>
);

export default CollectionOverviewContainer;
