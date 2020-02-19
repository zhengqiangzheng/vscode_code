import React, { Component, Fragment } from 'react';

class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'javascript',
      list: []
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
          ></input>
          <button>增加服务</button>
        </div>
        <ul>
          <li>头部按摩</li>
          <li>精油推背</li>
        </ul>
      </Fragment>
    );
  }
  inputChange(e) {
    // console.log(e);
    // this.state.inputValue = e.target.value;
    this.setState({
      inputValue: e.target.value
    });
  }
}
export default Xiaojiejie;
