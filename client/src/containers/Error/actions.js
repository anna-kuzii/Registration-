import * as CONSTANTS from './constants';

export const showError = (error) => ({
  type: CONSTANTS.SHOW_ERROR,
  error,
});
