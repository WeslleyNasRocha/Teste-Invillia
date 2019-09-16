import Immutable from 'seamless-immutable';

export const Types = {
  SKIP_INTRO: 'welcome/SKIP_INTRO',
};

const INITIAL_STATE = Immutable({ firstTime: true });

export type WelcomeReducer = {
  firstTime: boolean;
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SKIP_INTRO:
      return { firstTime: false };

    default:
      return state;
  }
}

export const Creators = {
  skipIntro: () => ({
    type: Types.SKIP_INTRO,
  }),
};
