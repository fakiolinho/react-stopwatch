import _merge from 'lodash/merge';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('stopwatch');

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
    localStorage.setItem('stopwatch', JSON.stringify(state));
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
    localStorage.removeItem('stopwatch');
  } catch (e) {
    // TODO: Log errors
  }
};
