import React, { Component, Fragment } from 'react';
import './style.css';
import XiaojiejieItem from './XiaojiejieItem';
import Boss from './Boss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import axios from 'axios';

class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.deleteSingle = this.deleteSingle.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.state = {
      inputValue: '',
      list: ['hello', 'world']
    };
  }
  //页面使用axios 请求数据一般放在componnentdidmount 函数中
  componentDidMount() {
    // axios
    //   .post('https://www.baidu.com')
    //   .then(res => {
    //     console.log('success' + JSON.stringify(res));
    //   })
    //   .catch(er => {
    //     console.log('error', er);
    //   });
  }
  // componentWillMount() {
  //   console.log('组件即将挂载到dom上');
  // }
  // componentDidMount() {
  //   console.log('组件已经挂载到dom上');
  // }
  render() {
    //console.log('组件正在挂载到dom上');

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
            ref={input => {
              this.input = input;
            }}
          ></input>
          <button onClick={this.AddService.bind(this)}>增加服务</button>
          <button onClick={this.clearAll}>clear all</button>
        </div>
        <ul
          ref={ul => {
            this.ul = ul;
          }}
        >
          <TransitionGroup>
            {this.state.list.map((item, index) => {
              return (
                //        <li
                //   key={index + item}
                //   onClick={this.deleteSingle.bind(this, index)}

                //   dangerouslySetInnerHTML={{ __html: item }}
                // ></li>
                <CSSTransition
                  timeout={2000}
                  classNames="boss-text"
                  key={index + item}
                  appear={true}
                >
                  <XiaojiejieItem
                    key={item + index}
                    content={item}
                    index={index}
                    //  {/*avname="波多野结衣"*/}
                    deleteSingle={this.deleteSingle}
                  />
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </ul>
        <Boss />
      </Fragment>
    );
  }
  clearAll() {
    this.setState({
      list: []
    });
  }
  AddService() {
    this.setState(
      {
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      },
      () => {
        console.log(this.ul.querySelectorAll('li').length);
      }
    );
  }
  inputChange(e) {
    // console.log(e);
    // this.state.inputValue = e.target.value;
    this.setState({
      // inputValue: e.target.value
      inputValue: this.input.value
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
