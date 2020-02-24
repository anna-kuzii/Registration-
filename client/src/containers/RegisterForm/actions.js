import * as CONSTANTS from './constants';

export const submitRegister = (data) => ({
  type: CONSTANTS.REGISTER_SUBMIT,
  userData: data,
});

export const pendingRegister = () => ({
  type: CONSTANTS.REGISTER_PENDING,
});

export const successRegister = (data) => ({
  type: CONSTANTS.REGISTER_SUCCESS,
  userData: data,
});

export const failureRegister = (error) => ({
  type: CONSTANTS.REGISTER_FAILURE,
  error,
});
