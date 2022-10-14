import {AnyAction} from '@reduxjs/toolkit';
import {put, call, CallEffect, PutEffect} from 'redux-saga/effects';
import {getTaskAPI} from '../../services/api';
import * as Types from '../types';

export function* getTodoSaga(): Generator<
  CallEffect | PutEffect<AnyAction>,
  void,
  any
> {
  try {
    const response = yield call(getTaskAPI);

    yield put({
      type: Types['GET_TODO_SUCCESS'],
      payload: response.data.data,
    });
  } catch (error: any) {
    yield put({
      type: Types['GET_TODO_FAILED'],
      payload: error,
    });
  }
}
