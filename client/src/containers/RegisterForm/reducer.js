import * as CONSTANTS from './constants';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case CONSTANTS.SUBMIT_FORM:
      return {
        ...state,
        isRegistered: true,
      };
    default:
      return state;
  }
};
