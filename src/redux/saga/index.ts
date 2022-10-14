import {all, takeLatest} from 'redux-saga/effects';
import * as TYPES from '../types';
import {AddTodoSaga} from './addTodo.saga';
import {deleteTodoSaga} from './deleteTodo';
import {editTodoSaga} from './editTodo.saga';
import {getTodoSaga} from './getTodo.saga';

function* rootSaga() {
  yield all([
    takeLatest(TYPES['GET_TODO_LOADING'], getTodoSaga),
    takeLatest(TYPES['ADD_TODO_LOADING'], AddTodoSaga),
    takeLatest(TYPES['EDIT_TODO_LOADING'], editTodoSaga),
    takeLatest(TYPES['DELETE_TODO_LOADING'], deleteTodoSaga),
  ]);
}

export default rootSaga;
