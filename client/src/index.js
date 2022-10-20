import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/style.scss';
import App from './App';
import { Provider } from 'react-redux';
import { createReduxStore } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createReduxStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);