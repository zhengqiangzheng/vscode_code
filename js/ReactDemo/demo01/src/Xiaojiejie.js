import React, { Component, Fragment } from 'react';
import './style.css';
import XiaojiejieItem from './XiaojiejieItem';

class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.deleteSingle = this.deleteSingle.bind(this);
    this.state = {
      inputValue: '',
      list: ['hello', 'world']
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          {/* nihao */}
          <label htmlFor="input">请输入服务</label>
          <input
            value={this.state.inputValue}
            id="input"
            className="input"
            onChange={this.inputChange.bind(this)}
          ></input>
          <button onClick={this.AddService.bind(this)}>增加服务</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              //        <li
              //   key={index + item}
              //   onClick={this.deleteSingle.bind(this, index)}

              //   dangerouslySetInnerHTML={{ __html: item }}
              // ></li>

              <XiaojiejieItem
                key={item + index}
                content={item}
                index={index}
                deleteSingle={this.deleteSingle}
              />
            );
          })}
        </ul>
      </Fragment>
    );
  }
  AddService() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    });
  }
  inputChange(e) {
    // console.log(e);
    // this.state.inputValue = e.target.value;
    this.setState({
      inputValue: e.target.value
    });
  }
  deleteSingle(index) {
    console.log(index);
    let list = this.state.list;
    list.splice(index, 1);
    console.log(list);
    this.setState({
      list: list
    });
  }
}
export default Xiaojiejie;
