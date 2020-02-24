import * as CONSTANTS from './constants';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case CONSTANTS.REGISTER_PENDING:
      return {
        ...state,
        loading: true,
      };
    case CONSTANTS.REGISTER_SUCCESS:
      return {
        ...state,
        ...action.userData,
        loading: false,
      };
    case CONSTANTS.REGISTER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
