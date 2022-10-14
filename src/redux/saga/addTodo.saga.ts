import {AnyAction, PayloadAction} from '@reduxjs/toolkit';
import {put, call, CallEffect, PutEffect} from 'redux-saga/effects';
import {AddTaskAPI} from '../../services/api';
import * as Types from '../types';

export function* AddTodoSaga(
  action: any,
): Generator<CallEffect | PutEffect<AnyAction>, void, any> {
  try {
    const response = yield call(AddTaskAPI, action.payload);

    yield put({
      type: Types['ADD_TODO_SUCCESS'],
      payload: response.data.data,
    });
  } catch (error: any) {
    yield put({
      type: Types['ADD_TODO_FAILED'],
      payload: error,
    });
  }
}
