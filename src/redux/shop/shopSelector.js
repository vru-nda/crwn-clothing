import {createSelector} from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// shop data
export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((item) => collections[item]) : []
);

// category data
export const selectCollection = (collectionParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionParam] : null
  );
