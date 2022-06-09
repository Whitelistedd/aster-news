import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from './App';
import { store } from './redux/store';

const rootDiv = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(rootDiv);
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);
