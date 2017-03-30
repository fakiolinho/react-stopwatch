import * as types from './actionTypes';
import initialState from './initialState';

const lapsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LAPS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case types.GET_LAPS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case types.GET_LAPS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: 'Oops, some error happened',
      };
    case types.SAVE_LAPS_REQUEST:
      return {
        ...state,
        data: action.laps,
      };
    case types.DELETE_LAPS_REQUEST:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};

export default lapsReducer;
