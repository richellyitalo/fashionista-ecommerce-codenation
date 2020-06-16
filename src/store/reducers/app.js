import { APP_CLEAR_OVERLAY, APP_SET_OVERLAY } from '../types';

const INITIAL_STATE = {
  overlay: 'cart',
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case APP_SET_OVERLAY:
      return { ...state, overlay: payload };
    case APP_CLEAR_OVERLAY:
      return { ...state, overlay: null };
    default:
      return state;
  }
};
