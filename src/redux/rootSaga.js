import {call, all} from 'redux-saga/effects';
import {shopSagas} from './shop/shopSagas';
import {userSagas} from './user/userSagas';

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas)]);
}
