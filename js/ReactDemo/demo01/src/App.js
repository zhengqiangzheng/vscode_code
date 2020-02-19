import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <ul className="my-list">
        <li>hello</li>
        <li>world</li>
        <li>{true ? 123 : 222}</li>
      </ul>
    );
    // var child1 = React.createElement('li', null, 'hello');
    // var child2 = React.createElement('li', null, 'world');
    // var root = React.createElement(
    //   'ul',
    //   { className: 'my-list' },
    //   child1,
    //   child2
    // );
  }
}
export default App;
