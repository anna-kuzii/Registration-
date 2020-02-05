import * as CONSTANTS from './constants';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case CONSTANTS.REGISTER_SUCCESS:
      return {
        ...state,
        ...action.userData,
      };
    case CONSTANTS.REGISTER_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
