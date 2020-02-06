import { combineReducers } from 'redux';
import submitRegistration from '../containers/RegisterForm/reducer';
import AlertMessage from '../containers/AlertContainerMessage/reducer';

export default combineReducers({
  user: submitRegistration,
  alert: AlertMessage,
});
