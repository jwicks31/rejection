import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import { reducer as Questions } from './reducers/questions';
import { loadState, saveState } from './local-state';

import './index.css';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    Questions,
    persistedState,
  );

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));
  return store;
};

export default configureStore;
