import * as types from './actionTypes';

const initialState = {
  entry: null,
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.LIST_LOADED:
      return  {
        ...state,
        entry: action.list
      }
    default:
      return state;
  }
}
