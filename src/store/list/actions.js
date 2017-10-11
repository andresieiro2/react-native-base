import * as types from './actionTypes';
import * as ListServices from './../../services/list';

export const listLoaded = (list) => ({
  type: types.LIST_LOADED,
  list
});

export const getTodosList = () => (dispatch, getState) => {
  ListServices.getTodos()
  .then( result => dispatch(listLoaded(result)) )
  .catch( error => console.log(error));
}
