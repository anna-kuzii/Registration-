import { combineReducers } from 'redux';
import submitRegistration from '../containers/RegisterForm/reducer';
import AlertMessage from '../containers/AlertContainerMessage/reducer';
import Error from '../containers/Error/reducer';

export default combineReducers({
  user: submitRegistration,
  alert: AlertMessage,
  error: Error,
});
