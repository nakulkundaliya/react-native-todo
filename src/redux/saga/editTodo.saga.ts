import {AnyAction} from '@reduxjs/toolkit';
import {put, call, CallEffect, PutEffect} from 'redux-saga/effects';
import {EditTaskAPI} from '../../services/api';
import * as Types from '../types';

export function* editTodoSaga(
  action: any,
): Generator<CallEffect | PutEffect<AnyAction>, void, any> {
  try {
    const response = yield call(EditTaskAPI, action.payload);

    yield put({
      type: Types['EDIT_TODO_SUCCESS'],
      payload: response.data.data,
    });
  } catch (error: any) {
    yield put({
      type: Types['EDIT_TODO_FAILED'],
      payload: error,
    });
  }
}
