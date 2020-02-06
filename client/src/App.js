import React from 'react';
import { Provider } from 'react-redux';
import { Routes } from './Routes';
import configureStore from './redux/configureStore';
import rootSaga from './redux/sagas';
import AlertContainerMsg from './containers/AlertContainerMessage';

const store = configureStore();
store.runSaga(rootSaga);

const App = () =>
  <Provider store={store}>
    <AlertContainerMsg />
    <Routes />
  </Provider>;

export default App;
