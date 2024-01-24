import {createContext} from 'react';
import SHOP_DATA from './ShopData';

const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;
