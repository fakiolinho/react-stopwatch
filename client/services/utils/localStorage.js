import _merge from 'lodash/merge';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (e) {
    // TODO: Log errors
  }
};

export const updateState = state => {
  try {
    saveState(_merge(loadState(), state));
  } catch (e) {
    // TODO: Log errors
  }
};

export const clearState = () => {
  try {
    localStorage.removeItem('state');
  } catch (e) {
    // TODO: Log errors
  }
};
