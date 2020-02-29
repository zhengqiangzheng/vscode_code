import React, { Component } from 'react';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 123
    };
  }
  componentDidMount() {
    console.log(this.props);
    if (this.props != null) {
      this.setState({ id: this.props.match.params.id });
    }
  }
  render() {
    return <h2>列表页List+{this.state.id}</h2>;
  }
}

export default List;
