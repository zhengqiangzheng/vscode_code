import React, { Component } from 'react';
import store from './store';
import {
  changeInputAction,
  addTaskAction,
  deleteItemAction
} from './store/actionCreators';
import TodoListUi from './TodoListUi';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.ChangeInput = this.ChangeInput.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.AddTask = this.AddTask.bind(this);
    //订阅
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <TodoListUi
        ChangeInput={this.ChangeInput}
        placeHolderValue={this.state.placeHolderValue}
        inputValue={this.state.inputValue}
        AddTask={this.AddTask}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }
  ChangeInput(e) {
    console.log(e.target);
    const action = changeInputAction(e.target.value);
    // store.dispatch({ type: 'InputChange', value: e.target.value });
    store.dispatch(action);
  }
  storeChange() {
    this.setState(store.getState());
  }
  AddTask() {
    console.log(this.state.inputValue);
    if (this.state.inputValue === '') {
      alert('null');
    } else {
      const action = addTaskAction(this.state.inputValue);
      store.dispatch(action);
    }
  }
  deleteItem(index) {
    console.log(index);
    store.dispatch(deleteItemAction(index));
  }
}

export default TodoList;
