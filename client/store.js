import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import { loadState, saveState } from './services/utils/localStorage';
import laps from './services/laps/reducer';

const persistedState = loadState();
const rootReducer = combineReducers({
  laps,
});
const store = createStore(
  rootReducer,
  persistedState,
  compose(applyMiddleware(thunk)),
);

store.subscribe(() => {
  saveState({
    laps: store.getState().laps,
  });
});

export default store;
