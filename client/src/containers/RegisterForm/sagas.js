import { take, call, fork } from 'redux-saga/effects';
import * as CONSTANTS from './constants';
import auth from '../../api/auth';

export default function* registerSaga() {
  yield fork(register);
}

export function* register() {
  const user = yield take(CONSTANTS.REGISTER_PENDING);
  yield call(auth.register, user.userData);
}
