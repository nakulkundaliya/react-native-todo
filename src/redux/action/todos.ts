import {TodoItemType} from '../../interfaces';
import * as TYPES from '../types';

interface EditActionType {
  data: {text: string};
  editId: string;
}

export const addAction = (payload: TodoItemType) => ({
  type: TYPES['ADD_TODO_LOADING'],
  payload: payload,
});

export const getAction = () => ({
  type: TYPES['GET_TODO_LOADING'],
});

export const editAction = (payload: EditActionType) => ({
  type: TYPES['EDIT_TODO_LOADING'],
  payload: payload,
});

export const deleteAction = (deleteId: string) => ({
  type: TYPES['DELETE_TODO_LOADING'],
  payload: deleteId,
});
