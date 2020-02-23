import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
    this.CallBoss = this.CallBoss.bind(this);
  }
  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames="boss-text"
          unmountOnExit
        >
          <div>史诗级怪物-牛魔王</div>
        </CSSTransition>
        {/* <div className={this.state.isShow ? 'show' : 'hide'}>
          史诗级怪物-牛魔王
        </div> */}
        <button onClick={this.CallBoss}>召唤boss</button>
      </div>
    );
  }
  CallBoss() {
    this.setState({
      isShow: !this.state.isShow
    });
  }
}

export default Boss;
