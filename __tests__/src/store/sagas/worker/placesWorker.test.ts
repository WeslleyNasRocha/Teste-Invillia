import { call, put, takeLatest } from 'redux-saga/effects';
import { Types } from '../../../../../src/store/reducers/places';
import { placesWatcher } from '../../../../../src/store/sagas';
import {
  fetchPlaces,
  setPlacesFromSearch,
} from '../../../../../src/store/sagas/workers/placesWorker';
import { requests } from '../../../../../src/utils/Api';
import {
  placesDetailErrorResponse,
  placesDetailResponse,
  placesNearbyErrorResponse,
  placesNearbyResponse,
} from '../../../../../__mocks__/places.mock';

describe('PLACES SAGAS', () => {
  const watcher = placesWatcher();
  it('should dispatch "FETCH_PLACES" action', () => {
    expect(watcher.next().value).toEqual(
      takeLatest(Types.FETCH_PLACES, fetchPlaces),
    );
  });

  it('should dispatch "SET_FROM_SEARCH" action', () => {
    expect(watcher.next().value).toEqual(
      takeLatest(Types.SET_FROM_SEARCH, setPlacesFromSearch),
    );
  });

  it('should fetch the places accordingly with the location', () => {
    const mockResponse = placesNearbyResponse;
    const action = {
      type: Types.FETCH_PLACES,
      payload: { latitude: -22.82555393596028, longitude: -47.07245866157876 },
    };
    const worker = fetchPlaces(action);
    expect(worker.next().value).toEqual(put({ type: Types.LOADING }));
    expect(worker.next().value).toEqual(
      call(requests.getNearby, action.payload),
    );
    expect(worker.next(mockResponse).value).toEqual(
      put({ type: Types.SUCCESS, payload: mockResponse.data.results }),
    );
    expect(worker.next().done).toBeTruthy();
  });

  it('should handle the failing request', () => {
    const mockResponse = placesNearbyErrorResponse;
    const action = {
      type: Types.FETCH_PLACES,
      payload: { latitude: -22.82555393596028, longitude: -47.07245866157876 },
    };
    const worker = fetchPlaces(action);
    expect(worker.next().value).toEqual(put({ type: Types.LOADING }));
    expect(worker.next().value).toEqual(
      call(requests.getNearby, action.payload),
    );
    expect(worker.next(mockResponse).value).toEqual(
      put({ type: Types.FAILED, payload: 'Erro ao buscar lugares próximos' }),
    );
    expect(worker.next().done).toBeTruthy();
  });

  it('should set the selected place from search', () => {
    const mockResponse = placesDetailResponse;
    const action = {
      type: Types.SET_FROM_SEARCH,
      payload: {
        place: {
          placeID: 'teste',
        },
      },
    };
    const worker = setPlacesFromSearch(action);
    expect(worker.next().value).toEqual(put({ type: Types.LOADING }));
    expect(worker.next().value).toEqual(
      call(requests.getDetails, { id: action.payload.place.placeID }),
    );
    expect(worker.next(mockResponse).value).toEqual(
      put({
        type: Types.SUCCESS,
        payload: [mockResponse.data.result],
        follow: true,
      }),
    );
    expect(worker.next().done).toBeTruthy();
  });

  it('should handle the failing request', () => {
    const mockResponse = placesDetailErrorResponse;
    const action = {
      type: Types.SET_FROM_SEARCH,
      payload: {
        place: {
          placeID: 'teste',
        },
      },
    };
    const worker = setPlacesFromSearch(action);
    expect(worker.next().value).toEqual(put({ type: Types.LOADING }));
    expect(worker.next().value).toEqual(
      call(requests.getDetails, { id: action.payload.place.placeID }),
    );
    expect(worker.next(mockResponse).value).toEqual(
      put({ type: Types.FAILED, payload: 'Erro ao buscar detalhes do lugar' }),
    );
    expect(worker.next().done).toBeTruthy();
  });
});
