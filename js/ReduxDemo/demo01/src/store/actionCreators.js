import { INPUT_CHANGE, ADD_TASK, DELETE_ITEM } from './actionTypes';
export const changeInputAction = value => {
  return {
    type: INPUT_CHANGE,
    value
  };
};
export const addTaskAction = value => {
  return {
    type: ADD_TASK,
    value
  };
};
export const deleteItemAction = index => {
  return {
    type: DELETE_ITEM,
    index
  };
};
