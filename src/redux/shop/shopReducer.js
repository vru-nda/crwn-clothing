import {shopActionTypes} from './shopTypes';

const INITAL_STATE = {
  collections: {},
};

const shopReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTION:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
