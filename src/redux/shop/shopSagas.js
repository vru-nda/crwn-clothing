import {all, call, put, takeLatest} from 'redux-saga/effects';

import {
  convertCollectionSnapshotToMap,
  firestore,
} from '../../firebase/firebaseUtils';

import {fetchCollectionsFailure, fetchCollectionsSuccess} from './shopActions';
import {shopActionTypes} from './shopTypes';

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}

// put ==> dispatch
// call => to yield the function call
