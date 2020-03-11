import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function Index() {
  useEffect(() => {
    console.log('index来了'); //相当于componentdidmount 和compondentdidupdate俩生命周期函数

    return () => {
      console.log('index离开了'); //相当于componentwillunmount
    };
  }, []); //第二个参数设为空数组则表示只有该路由失去挂载时执行 return里的方法componentwillunmount
  return <h2>index</h2>;
}
function List() {
  return <h2>list</h2>;
}
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //代表了Componentdidmount Componentdidupdate俩生命周期函数
    // console.log('Componentdidmount');
    // console.log('Componentdid update');
    return () => {
      console.log('计数器执行了');
    };
  }, [count]);
  return (
    <div>
      <p>you click {count}times</p>
      <button onClick={() => setCount(count + 1)}> click here</button>
      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            {' '}
            <Link to="/list">列表页</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list" component={List} />
      </Router>
    </div>
  );
}
// class Example extends Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.state = { clickTimes: 0 };
//   }
//   render() {
//     return (
//       <div>
//         <p onClick={this.handleClick}>你点击了{this.state.clickTimes}次</p>
//       </div>
//     );
//   }
//   handleClick() {
//     let tempTimes = this.state.clickTimes;
//     this.setState({
//       clickTimes: ++tempTimes
//     });
//   }
// }

export default Example;
