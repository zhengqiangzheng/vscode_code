import React from 'react';
import { Route, Link } from 'react-router-dom';
import CodeClean from './workplace/CodeClean';
import GetUp from './workplace/GetUp';
function WorkPlace() {
  return (
    <div>
      <h2>我是职场路径</h2>
      <div>
        <ul>
          <li>
            <Link to="/workplace/getup">早期攻略</Link>
          </li>
          <li>
            <Link to="/workplace/codeclean">代码整洁</Link>
          </li>
        </ul>
        <Route path="/workplace/getup" component={GetUp} />
        <Route path="/workplace/codeclean" component={CodeClean} />
      </div>
    </div>
  );
}
export default WorkPlace;
