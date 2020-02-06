import * as CONSTANTS from './constants';

export const showAlertMsg = (msg, typeMsg) => ({
  type: CONSTANTS.SHOW_ALERT_MSG,
  msg,
  typeMsg,
});

export const hideAlert = () => ({
  type: CONSTANTS.HIDE_ALERT_MSG,
});

