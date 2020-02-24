import { takeEvery, call, put } from 'redux-saga/effects';
import * as CONSTANTS from './constants';
import auth from '../../api/auth';
import { history } from '../../utils/history';
import { showError } from '../Error/actions';

export default function* verificationSaga() {
  yield takeEvery(CONSTANTS.LOADING_DATA, verifiedUser);
}

export function* verifiedUser({ token }) {
  try {
    yield call(auth.verification, token);

    history.push('/login');
  } catch (error) {
    yield put(showError(error.response.data.message));
    history.push('/error');
  }
}
