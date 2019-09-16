import { ApiResponse } from 'apisauce';
import { GMSTypes } from 'react-native-google-places';
import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';
import { requests } from '../../../utils/Api';
import { placesTypes } from '../../reducers';

export function* fetchPlaces({ payload: { latitude, longitude } }: AnyAction) {
  try {
    yield put({ type: placesTypes.LOADING });
    const result: ApiResponse<{ results: Array<any> }> = yield call(
      requests.getNearby,
      {
        latitude,
        longitude,
      },
    );
    if (!result.ok) {
      throw new Error('Erro ao buscar lugares próximos');
    }
    yield put({ type: placesTypes.SUCCESS, payload: result.data.results });
  } catch (err) {
    yield put({ type: placesTypes.FAILED, payload: err.message });
  }
}

type setPlacesFromSearchT = AnyAction & {
  payload: { place: Partial<GMSTypes.Place> };
};
export function* setPlacesFromSearch({
  payload: { place },
}: setPlacesFromSearchT) {
  try {
    yield put({ type: placesTypes.LOADING });
    const result: ApiResponse<{ result: any }> = yield call(
      requests.getDetails,
      {
        id: place.placeID,
      },
    );
    if (!result.ok) {
      throw new Error('Erro ao buscar detalhes do lugar');
    }
    yield put({
      type: placesTypes.SUCCESS,
      payload: [result.data.result],
      follow: true,
    });
  } catch (err) {
    yield put({ type: placesTypes.FAILED, payload: err.message });
  }
}
