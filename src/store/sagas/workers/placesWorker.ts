import { call, put } from 'redux-saga/effects';
import { requests } from '../../../utils/Api';
import { ApiResponse } from 'apisauce';
import { placesTypes } from '../../reducers';

export function* fetchPlaces({ payload: { latitude, longitude } }) {
  try {
    yield put({ type: placesTypes.LOADING });
    const result: ApiResponse<any> = yield call(requests.getNearby, {
      latitude,
      longitude,
    });
    if (!result.ok) {
      throw new Error('Erro ao buscar lugares próximos');
    }
    yield put({ type: placesTypes.SUCCESS, payload: result.data.results });
  } catch (err) {
    yield put({ type: placesTypes.FAILED, payload: err.message });
  }
}
