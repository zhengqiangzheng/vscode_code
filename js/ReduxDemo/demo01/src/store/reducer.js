import { INPUT_CHANGE, ADD_TASK, DELETE_ITEM, GET_DATA } from './actionTypes';

const defaultState = {
  inputValue: '',
  placeHolderValue: '',
  list: []
};
export default (state = defaultState, action) => {
  // console.log(state, action);
  //reducer 中只能接受state不能改变state
  if (action.type === INPUT_CHANGE) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    console.log(newState);
    return newState;
  }
  if (action.type === ADD_TASK) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = '';
    if (action.value.trim() === '') {
      alert('null');
      return newState;
    } else {
      newState.list.push(action.value);
      return newState;
    }
  }
  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    // console.log(newState.list);
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === GET_DATA) {
    let newState = JSON.parse(JSON.stringify(state));
    console.log(action.data);
    newState.list = action.data.list;
    newState.placeHolderValue = action.data.placeHolder;

    return newState;
  }
  return state;
};
