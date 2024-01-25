import {gql} from 'apollo-boost';
import React from 'react';
import {Mutation} from 'react-apollo';

import CartIcon from './CartIcon';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const CartIconContainer = () => {
  return (
    <Mutation mutation={TOGGLE_CART_HIDDEN}>
      {(toggleCartHidden) => <CartIcon toggleCartHidden={toggleCartHidden} />}
    </Mutation>
  );
};

export default CartIconContainer;
