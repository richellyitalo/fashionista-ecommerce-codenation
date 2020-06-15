import { MAIN_CLEAR_OVERLAY, MAIN_SET_OVERLAY } from '../types';

const INITIAL_STATE = {
  overlay: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case MAIN_SET_OVERLAY:
      return { ...state, overlay: payload };
    case MAIN_CLEAR_OVERLAY:
      return { ...state, overlay: null };
    default:
      return state;
  }
};
