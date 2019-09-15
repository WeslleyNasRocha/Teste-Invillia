import { all, takeLatest, fork } from 'redux-saga/effects';
import { placesTypes } from '../reducers';
import { fetchPlaces, setPlacesFromSearch } from './workers/placesWorker';

function* placesWatcher() {
  yield takeLatest(placesTypes.FETCH_PLACES, fetchPlaces);
  yield takeLatest(placesTypes.SET_FROM_SEARCH, setPlacesFromSearch);
}

export default function* rootSaga() {
  yield all([fork(placesWatcher)]);
}
