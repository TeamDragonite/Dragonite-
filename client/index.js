/**
 * ************************************
 *
 * @module  index.js
 * @author  rjpatt
 * @date    9/14/21
 * @description entry point for application.  Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import styles from './stylesheets/app.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);