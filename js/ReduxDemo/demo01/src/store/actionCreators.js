import { INPUT_CHANGE, ADD_TASK, DELETE_ITEM, GET_DATA } from './actionTypes';
import Mock from 'mockjs';
import axios from 'axios';
import data from '../mockjsdata';
// import store from './index';

//注册接口
Mock.mock('/api/getData', {
  data: data
});
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
export const getDataAction = data => {
  return {
    type: GET_DATA,
    data
  };
};
//将数据初始化功能封装到一个方法中/
export const getTodoList = () => {
  return dispatch => {
    axios.get('/api/getData').then(res => {
      //console.log(res.data.data);
      const action = getDataAction(res.data.data);
      dispatch(action);
    });
  };
};
