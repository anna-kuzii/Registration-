import * as CONSTANTS from './constants';

export const submitRegister = (data) => ({
  type: CONSTANTS.REGISTER_PENDING,
  userData: data,
});
