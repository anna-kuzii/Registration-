import * as CONSTANTS from './constants';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case CONSTANTS.SHOW_ERROR:
      return {
        ...state,
        errorMsg: action.error,
      };
    default:
      return state;
  }
};
