import { all } from 'redux-saga/effects';
import registerSaga from '../containers/RegisterForm/sagas';

export default function* rootSaga() {
  yield all([
    registerSaga(),
  ]);
}
