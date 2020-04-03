import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Spin, Input, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import servicePath from '../config/apiUrl';
import '../static/css/Login.css';
function Login(props) {
  const [useName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const checkLogin = () => {
    setIsLoading(true);
    if (!useName) {
      message.error('用户名不能为空');
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return false;
    } else if (!userPassword) {
      message.error('密码不能为空');
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return false;
    }
    let dataProps = {
      userName: useName,
      password: userPassword
    };
    axios({
      method: 'POST',
      data: dataProps,
      withCredentials: true,
      url: servicePath.checkLogin
    }).then(res => {
      console.log(res.data.data);
      if (res.data.data == '登陆成功') {
        localStorage.setItem('openId', res.data.openId);
        props.history.push('/index');
      } else {
        message.error('用户名密码错误');
      }
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div className="login-div">
      <Spin tip="Loading" spinning={isLoading}>
        <Card title="Bolg admin system" bordered={true} style={{ width: 400 }}>
          <Input
            id="userName"
            size="large"
            placeholder="Enter your userName"
            prefix={<UserOutlined style={{ color: 'rgb(0,0,0,.25)' }} />}
            onChange={e => {
              setUserName(e.target.value);
            }}
          />
          <br />
          <br />
          <Input.Password
            id="userName"
            size="large"
            placeholder="Enter your password"
            prefix={<UserOutlined style={{ color: 'rgb(0,0,0,.25)' }} />}
            onChange={e => {
              setUserPassword(e.target.value);
            }}
          />
          <br />
          <br />

          <Button onClick={checkLogin} type="primary" size="large" block>
            Login in
          </Button>
        </Card>
      </Spin>
    </div>
  );
}
export default Login;
