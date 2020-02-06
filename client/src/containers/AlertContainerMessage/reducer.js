import * as CONSTANTS from './constants';

export const initialState = {
  message: '',
  color: '',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CONSTANTS.SHOW_ALERT_MSG:
      return {
        ...state,
        msg: action.msg,
        type: action.typeMsg,
      };
    case CONSTANTS.HIDE_ALERT_MSG:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
