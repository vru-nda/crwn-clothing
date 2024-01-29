import React from 'react';
import {gql} from 'apollo-boost';
import {Mutation, Query} from 'react-apollo';

import CartDropDown from './CartDropDown';

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const CartDropDownContainer = () => {
  return (
    <>
      <Mutation mutation={TOGGLE_CART_HIDDEN}>
        {(toggleCartHidden) => (
          <Query query={GET_CART_ITEMS}>
            {({data: {cartItems}}) => (
              <CartDropDown
                cartItems={cartItems}
                toggleCartHidden={toggleCartHidden}
              />
            )}
          </Query>
        )}
      </Mutation>
    </>
  );
};

export default CartDropDownContainer;
