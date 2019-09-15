import Immutable from 'seamless-immutable';

export const Types = {
  FETCH_PLACES: 'places/FETCH_PLACES',
  LOADING: 'places/LOADING',
  SUCCESS: 'places/SUCCESS',
  FAILED: 'places/FAILED',
};

const INITIAL_STATE = Immutable({
  loading: false,
  places: [],
});

export default function Places(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOADING:
      return { ...state, loading: true };
    case Types.SUCCESS:
      console.tron.log(action);
      return { ...state, loading: false, places: action.payload };
    case Types.FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export const Creators = {
  fetch: ({ latitude, longitude }) => ({
    type: Types.FETCH_PLACES,
    payload: { latitude, longitude },
  }),
  setSelected: place => ({
    type: Types.SUCCESS,
    payload: [place],
  }),
};
