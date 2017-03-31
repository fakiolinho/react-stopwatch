import React from 'react';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { getLaps, saveLaps, deleteLaps } from './actions';
import * as types from './actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test laps actions', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  it('should dispatch GET_LAPS_REQUEST, GET_LAPS_SUCCESS when getLaps action is successful', () => {
    moxios.stubRequest('/api/laps', {
      status: 200,
      response: { data: [1, 2, 3] },
    });

    const expectedActions = [{
      type: types.GET_LAPS_REQUEST,
    }, {
      type: types.GET_LAPS_SUCCESS,
      payload: [1, 2, 3],
    }];
    const store = mockStore({
      laps: {
        error: null,
        isLoading: false,
        data: [],
      },
    });

    return store.dispatch(getLaps())
    .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('should dispatch GET_LAPS_REQUEST, GET_LAPS_ERROR when getLaps action is unsuccessful', () => {
    moxios.stubRequest('/api/laps', {
      status: 500,
      response: { data: [] },
    });

    const expectedActions = [{
      type: types.GET_LAPS_REQUEST,
    }, {
      type: types.GET_LAPS_ERROR,
    }];
    const store = mockStore({
      laps: {
        error: null,
        isLoading: false,
        data: [],
      },
    });

    return store.dispatch(getLaps())
    .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('should dispatch SAVE_LAPS_REQUEST when saveLaps action is dispatched', () => {
    moxios.stubRequest('/api/laps', {
      status: 200,
      response: { data: [1, 2, 3] },
    });

    const expectedActions = [{
      type: types.SAVE_LAPS_REQUEST,
      laps: [5, 2],
    }];
    const store = mockStore({
      laps: {
        error: null,
        isLoading: false,
        data: [2],
      },
    });

    return store.dispatch(saveLaps(5))
    .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('should dispatch DELETE_LAPS_REQUEST when deleteLaps action is dispatched', () => {
    moxios.stubRequest('/api/laps', {
      status: 200,
      response: { data: [] },
    });

    const expectedActions = [{
      type: types.DELETE_LAPS_REQUEST,
    }];
    const store = mockStore({
      laps: {
        error: null,
        isLoading: false,
        data: [2],
      },
    });

    return store.dispatch(deleteLaps())
    .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
