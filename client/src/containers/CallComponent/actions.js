import * as CONSTANTS from './constants';

export const loadingData = (token) => ({
  type: CONSTANTS.LOADING_DATA,
  token,
});
