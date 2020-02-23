import React, { Component } from 'react';
import PropTypes from 'prop-types';
class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  //做性能优化
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    }
    return false;
  }
  render() {
    console.log('child-render');
    return (
      <li onClick={this.handleClick}>
        {this.props.avname}为你服务{this.props.content}
      </li>
    );
  }
  handleClick() {
    this.props.deleteSingle(this.props.index);
  }
}
XiaojiejieItem.propTypes = {
  avname: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteSingle: PropTypes.func
};
XiaojiejieItem.defaultProps = {
  avname: '松岛枫'
};

export default XiaojiejieItem;
