import {TodoItemType} from '../interfaces';
import {ApiRequest} from './request';
import Url from './urls';

export const getTaskAPI = async () => {
  const config = {
    url: Url.getTodos,
    method: 'GET',
  };
  const result = await ApiRequest(config);
  return result;
};

export const AddTaskAPI = async (data: TodoItemType) => {
  const config = {
    url: Url.addTodo,
    method: 'POST',
    data: data,
  };
  const result = await ApiRequest(config);
  return result;
};

export const EditTaskAPI = async (data: any) => {
  const url = `${Url.editTodo}/${data.editId}`;
  const config = {
    url: url,
    method: 'PUT',
    data: data.data,
  };
  const result = await ApiRequest(config);
  return result;
};

export const DeleteTaskAPI = async (deleteId: string) => {
  const url = `${Url.deleteTodo}/${deleteId}`;
  const config = {
    url: url,
    method: 'DELETE',
  };
  const result = await ApiRequest(config);
  return result;
};
