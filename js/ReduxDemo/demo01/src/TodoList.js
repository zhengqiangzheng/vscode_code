import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import {
  changeInputAction,
  addTaskAction,
  deleteItemAction
} from './store/actionCreators';

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
      <div>
        <div style={{ margin: '10px' }}>
          <Input
            onChange={this.ChangeInput}
            placeholder={this.state.placeHolderValue}
            style={{ width: '250px', marginRight: '10px', marginTop: '10px' }}
            value={this.state.inputValue}
          />
          <Button type={'primary'} onClick={this.AddTask}>
            添加任务
          </Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            dataSource={this.state.list}
            bordered
            renderItem={(item, index) => (
              <List.Item onClick={this.deleteItem.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
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
