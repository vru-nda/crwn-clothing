import {shopActionTypes} from './shopTypes';

export const updateCollection = (collectionsMap) => {
  return {
    type: shopActionTypes.UPDATE_COLLECTION,
    payload: collectionsMap,
  };
};
