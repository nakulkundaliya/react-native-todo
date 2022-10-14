import {PayloadAction} from '@reduxjs/toolkit';
import * as Types from '../types';

interface taskItem {
  _id: string;
  description: string;
}
interface InitialStateType {
  loading: boolean;
  tasks: taskItem[];
  error: null | string;
}

const initialState: InitialStateType = {
  loading: false,
  tasks: [],
  error: null,
};

export const todoReducer = (state = initialState, action: PayloadAction) => {
  switch (action.type) {
    case Types['GET_TODO_LOADING']:
      return {
        ...state,
        loading: true,
      };

    case Types['DELETE_TODO_LOADING']:
      return {
        ...state,
        loading: true,
      };

    case Types['GET_TODO_SUCCESS']:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };
    case Types['ADD_TODO_SUCCESS']:
      const addTodo = [action.payload, ...state.tasks];
      return {
        ...state,
        loading: false,
        tasks: addTodo,
      };
    case Types['EDIT_TODO_SUCCESS']:
      const EditTodo = state.tasks.map(item =>
        // @ts-ignore
        item._id === action.payload._id ? action.payload : item,
      );
      return {
        ...state,
        loading: false,
        tasks: EditTodo,
      };
    case Types['DELETE_TODO_SUCCESS']:
      const deleteTodo = state.tasks.filter(
        // @ts-ignore
        item => item._id !== action.payload,
      );

      return {
        ...state,
        loading: false,
        tasks: deleteTodo,
      };

    case Types['GET_TODO_FAILED']:
      return {
        ...state,
        loading: false,
      };
    case Types['ADD_TODO_FAILED']:
      return {
        ...state,
        loading: false,
      };
    case Types['EDIT_TODO_FAILED']:
      return {
        ...state,
        loading: false,
      };
    case Types['DELETE_TODO_FAILED']:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
