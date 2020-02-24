import { all } from 'redux-saga/effects';
import registerSaga from '../containers/RegisterForm/sagas';
import verificationSaga from '../containers/CallComponent/sagas';

export default function* rootSaga() {
  yield all([
    registerSaga(),
    verificationSaga(),
  ]);
}
