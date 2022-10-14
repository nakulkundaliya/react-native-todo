import {AnyAction} from '@reduxjs/toolkit';
import {put, call, CallEffect, PutEffect} from 'redux-saga/effects';
import {DeleteTaskAPI} from '../../services/api';
import * as Types from '../types';

export function* deleteTodoSaga(
  action: any,
): Generator<CallEffect | PutEffect<AnyAction>, void, any> {
  try {
    yield call(DeleteTaskAPI, action.payload);

    yield put({
      type: Types['DELETE_TODO_SUCCESS'],
      payload: action.payload,
    });
  } catch (error: any) {
    yield put({
      type: Types['DELETE_TODO_FAILED'],
      payload: error,
    });
  }
}
