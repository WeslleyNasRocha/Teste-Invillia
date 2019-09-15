import { all, takeLatest, fork } from 'redux-saga/effects';
import { placesTypes } from '../reducers';
import { fetchPlaces } from './workers/placesWorker';

function* placesWatcher() {
  yield takeLatest(placesTypes.FETCH_PLACES, fetchPlaces);
}

export default function* rootSaga() {
  yield all([fork(placesWatcher)]);
}
