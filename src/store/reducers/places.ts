import Immutable from 'seamless-immutable';
import { GMSTypes } from 'react-native-google-places';

export const Types = {
  FETCH_PLACES: 'places/FETCH_PLACES',
  SET_FROM_SEARCH: 'places/SET_FROM_SEARCH',
  LOADING: 'places/LOADING',
  SUCCESS: 'places/SUCCESS',
  FAILED: 'places/FAILED',
};

const INITIAL_STATE = Immutable({
  loading: false,
  places: [],
  follow: false,
});

export default function Places(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOADING:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        loading: false,
        places: action.payload,
        follow: !!action.follow,
      };
    case Types.FAILED:
      return { ...state, loading: false, error: action.payload, follow: false };
    default:
      return state;
  }
}

export const Creators = {
  fetch: ({ latitude, longitude }) => ({
    type: Types.FETCH_PLACES,
    payload: { latitude, longitude },
  }),
  setSelected: (place: GMSTypes.Place) => ({
    type: Types.SET_FROM_SEARCH,
    payload: { place },
  }),
};
