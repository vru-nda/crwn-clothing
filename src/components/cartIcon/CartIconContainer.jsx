import {gql} from 'apollo-boost';
import React from 'react';
import {compose, graphql} from 'react-apollo';

import CartIcon from './CartIcon';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_CART_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const CartIconContainer = ({toggleCartHidden, data: {itemCount}}) => {
  return <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />;
};

export default compose(
  graphql(GET_CART_ITEM_COUNT),
  graphql(TOGGLE_CART_HIDDEN, {name: 'toggleCartHidden'})
)(CartIconContainer);
