import axios from 'axios';

const BASE_URL = 'https://task-crud-demo.herokuapp.com/api';

export const ApiRequest = async (config: any) => {
  const newConfig = {
    baseURL: BASE_URL,
    ...config,
  };
  return axios(newConfig)
    .then(res => {
      return res;
    })
    .catch(error => {
      throw error;
    });
};
