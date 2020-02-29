import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import List from './List';
const clist = [
  {
    cid: 123,
    title: '文章一'
  },
  {
    cid: 456,
    title: '文章二'
  },
  {
    cid: 789,
    title: '文章三'
  }
];

class Index extends Component {
  constructor(props) {
    super(props);
    this.props.history.push('/Home');
    this.state = {
      clist
    };
  }
  render() {
    return (
      <div>
        {/* <Redirect to="/Home"></Redirect> */}
        <h2>首页index</h2>
        <ul>
          {this.state.clist.map((item, index) => {
            return (
              <li key={index}>
                <Link to={'/List/' + item.cid}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Index;
