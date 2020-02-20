import React, { Component } from 'react';
class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return <li onClick={this.handleClick}>{this.props.content}</li>;
  }
  handleClick() {
    this.props.deleteSingle(this.props.index);
  }
}

export default XiaojiejieItem;
