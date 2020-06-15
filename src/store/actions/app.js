import * as types from '../types';

export const setOverlay = (typeOverlay) => ({
  type: types.APP_SET_OVERLAY,
  payload: typeOverlay,
});

export const clearOverlay = () => ({
  type: types.APP_CLEAR_OVERLAY,
});
