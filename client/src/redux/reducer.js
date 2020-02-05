import { combineReducers } from 'redux';
import submitRegistration from '../containers/RegisterForm/reducer';

export default combineReducers({
  user: submitRegistration,
});
