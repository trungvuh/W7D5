import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import { fetchBenches } from './actions/bench_actions';
// import { login, signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  }
  else {
    store = configureStore();
  }

  window.fetchBenches = fetchBenches;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
});
