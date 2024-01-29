import {gql} from 'apollo-boost';
import {addItemToCart, getCartItemCount} from './cartUtils';

export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item!): [Item]!
  }
`;

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const GET_CART_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, _context, _info) => {
      const {cartHidden} = _context.cache.readQuery({
        query: GET_CART_HIDDEN,
        //   variables:
      });

      _context.cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: {cartHidden: !cartHidden},
      });
      return !cartHidden;
    },

    addItemToCart: (_, {item}, {cache}) => {
      const {cartItems} = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCartItems = addItemToCart(cartItems, item);

      // update cart item count
      cache.writeQuery({
        query: GET_CART_ITEM_COUNT,
        data: {itemCount: getCartItemCount(newCartItems)},
      });

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: {cartItems: newCartItems},
      });

      return newCartItems;
    },
  },
};
