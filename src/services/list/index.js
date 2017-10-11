import { callService, callMultipleServices } from './../fetch';

export const getTodos = () => {
  return callService('/todos');
}
