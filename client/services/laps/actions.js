import axios from 'axios';

import * as types from './actionTypes';

export const getLaps = () => dispatch => {
  dispatch({
    type: types.GET_LAPS_REQUEST,
  });

  return axios.get('/api/laps')
  .then(({ data }) => {
    dispatch({
      type: types.GET_LAPS_SUCCESS,
      payload: data.data,
    });
  })
  .catch(err => {
    dispatch({
      type: types.GET_LAPS_ERROR,
    });
  });
};

export const saveLaps = lap => (dispatch, getState) => {
  const laps = [lap, ...getState().laps.data];

  dispatch({
    type: types.SAVE_LAPS_REQUEST,
    laps,
  });

  return axios.post('/api/laps', { laps })
  .then(res => {})
  .catch(err => {});
};

export const deleteLaps = () => dispatch => {
  dispatch({
    type: types.DELETE_LAPS_REQUEST,
  });

  return axios.post('/api/laps', { laps: [] })
  .then(res => {})
  .catch(err => {});
};
