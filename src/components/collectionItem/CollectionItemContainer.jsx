import {gql} from 'apollo-boost';
import React from 'react';
import {Mutation} from 'react-apollo';
import CollectionItem from './CollectionItem';

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const CollectionItemContainer = (props) => {
  return (
    <Mutation mutation={ADD_ITEM_TO_CART}>
      {(addItemToCart) => (
        <CollectionItem
          {...props}
          addCartItem={(item) => addItemToCart({variables: {item}})}
        />
      )}
    </Mutation>
  );
};

export default CollectionItemContainer;
