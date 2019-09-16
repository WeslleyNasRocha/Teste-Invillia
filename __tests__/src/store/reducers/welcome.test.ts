import reducer, {
  Creators,
  Types,
} from '../../../../src/store/reducers/welcome';

describe('WELCOME ACTIONS', () => {
  it('should create an action with the correct type', () => {
    const expectAction = {
      type: Types.SKIP_INTRO,
    };
    expect(Creators.skipIntro()).toEqual(expectAction);
  });
});

describe('WELCOM REDUCERS', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ firstTime: true });
  });
  it('should handle "SKIP_INTRO" action', () => {
    expect(reducer({}, { type: Types.SKIP_INTRO })).toEqual({
      firstTime: false,
    });
  });
});
