import reducer from './reducer';
import * as types from './actionTypes';

describe('laps reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      error: null,
      isLoading: false,
      data: [],
    });
  });

  it('should handle GET_LAPS_REQUEST', () => {
    expect(
      reducer({
        error: null,
        isLoading: false,
        data: [],
      }, {
        type: types.GET_LAPS_REQUEST,
      })
    ).toEqual({
      error: null,
      isLoading: true,
      data: [],
    });
  });

  it('should handle GET_LAPS_SUCCESS', () => {
    expect(
      reducer({
        error: null,
        isLoading: true,
        data: [],
      }, {
        type: types.GET_LAPS_SUCCESS,
        payload: [1, 2, 3],
      })
    ).toEqual({
      error: null,
      isLoading: false,
      data: [1, 2, 3],
    });
  });

  it('should handle GET_LAPS_ERROR', () => {
    expect(
      reducer({
        error: null,
        isLoading: true,
        data: [1, 2, 3],
      }, {
        type: types.GET_LAPS_ERROR,
      })
    ).toEqual({
      error: 'Oops, some error happened',
      isLoading: false,
      data: [1, 2, 3],
    });
  });

  it('should handle SAVE_LAPS_REQUEST', () => {
    expect(
      reducer({
        error: null,
        isLoading: false,
        data: [1, 2],
      }, {
        type: types.SAVE_LAPS_REQUEST,
        laps: [1, 2, 3],
      })
    ).toEqual({
      error: null,
      isLoading: false,
      data: [1, 2, 3],
    });
  });

  it('should handle DELETE_LAPS_REQUEST', () => {
    expect(
      reducer({
        error: null,
        isLoading: false,
        data: [1, 2, 3],
      }, {
        type: types.DELETE_LAPS_REQUEST,
      })
    ).toEqual({
      error: null,
      isLoading: false,
      data: [],
    });
  });
});
