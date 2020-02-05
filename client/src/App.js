import React from 'react';
import { Provider } from 'react-redux';
import { Routes } from './Routes';
import configureStore from './redux/configureStore';
import rootSaga from './redux/sagas';

const store = configureStore();
store.runSaga(rootSaga);

const App = () =>
  <Provider store={store}>
    <Routes />
  </Provider>;

export default App;
