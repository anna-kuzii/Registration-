import { take, call, fork, put } from 'redux-saga/effects';
import * as CONSTANTS from './constants';
import auth from '../../api/auth';
import { history } from '../../helpers/history';
import { successRegister, failureRegister } from './actions';

export default function* registerSaga() {
  yield fork(register);
}

export function* register() {
  try {
    const user = yield take(CONSTANTS.REGISTER_PENDING);
    const response = yield call(auth.register, user.userData);

    localStorage.setItem('token', response.headers['access-token']);

    yield put(successRegister(response.data.user));
    // TODO add alert

    history.push('/check-your-email');
  } catch (error) {
    // TODO add alert
    yield put(failureRegister(error.response.data.message));
  }
}
