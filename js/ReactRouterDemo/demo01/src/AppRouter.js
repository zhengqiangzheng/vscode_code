import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './Pages/Index';
import List from './Pages/List';
import Home from './Pages/Home';

function AppRouter() {
  return (
    <Router>
      <ul>
        <li>
          <Link to={'/'}>首页</Link>
        </li>
        <li>
          <Link to={'/Home'}>Home</Link>
        </li>
        <li>
          <Link to={'/List/123'}>列表</Link>
        </li>
      </ul>
      <Route path="/" exact component={Index}></Route>
      <Route path="/Home" exact component={Home}></Route>
      <Route path="/List/:id" component={List}></Route>
    </Router>
  );
}

export default AppRouter;
