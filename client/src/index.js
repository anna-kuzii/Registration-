import React from 'react';
import { render } from 'react-dom';
import './index.css';
import './styles/main.scss';
import App from './App';
import configureStore from './redux/configureStore';
import rootSaga from './redux/sagas';
import { Provider } from 'react-redux';

const store = configureStore();
store.runSaga(rootSaga);

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
);
