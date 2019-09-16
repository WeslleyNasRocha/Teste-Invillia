import reducer, {
  Creators,
  Types,
} from '../../../../src/store/reducers/places';

describe('PLACES ACTIONS', () => {
  it('should create "FETCH_PLACES" action', () => {
    const expectAction = {
      type: Types.FETCH_PLACES,
      payload: { latitude: 0, longitude: 0 },
    };
    expect(Creators.fetch({ latitude: 0, longitude: 0 })).toEqual(expectAction);
  });

  it('should create "SET_FROM_SEARCH" action', () => {
    const expectAction = {
      type: Types.SET_FROM_SEARCH,
      payload: { place: { placeID: 'test' } },
    };
    // @ts-ignore
    expect(Creators.setSelected({ placeID: 'test' })).toEqual(expectAction);
  });
});

describe('PLACES REDUCERS', () => {
  const initialState = {
    loading: false,
    places: [],
    follow: false,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle "LOADING" action', () => {
    expect(reducer(initialState, { type: Types.LOADING })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle "SUCCESS" action', () => {
    expect(
      reducer(initialState, { type: Types.SUCCESS, payload: [{ test: 1 }] }),
    ).toEqual({
      loading: false,
      places: [{ test: 1 }],
      follow: false,
    });
  });

  it('should handle "FAILED" action', () => {
    expect(
      reducer(initialState, { type: Types.FAILED, payload: 'ERRO' }),
    ).toEqual({
      ...initialState,
      loading: false,
      follow: false,
      error: 'ERRO',
    });
  });
});
