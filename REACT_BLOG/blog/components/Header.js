import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import '../static/style/components/header.css';
import axios from 'axios';
import servicePath from '../config/apiUrl';
import { Row, Col, Menu } from 'antd';
import {
  HomeOutlined,
  YoutubeOutlined,
  SmileOutlined
} from '@ant-design/icons';
const Header = () => {
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <span className="header-logo">zhengqiang</span>
          <span className="header-txt">.net developer</span>
        </Col>
        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal">
            <Row type="flex">
              <Col xs={0} sm={0} md={6}>
                <Link href={{ pathname: '/' }}>
                  <a>
                    <HomeOutlined /> 博客首页
                  </a>
                </Link>
              </Col>
              <Col xs={0} sm={0} md={6}>
                <Link href={{ pathname: '/list', query: { id: 1 } }}>
                  <a>
                    <YoutubeOutlined /> 文章列表
                  </a>
                </Link>
              </Col>
              <Col xs={0} sm={0} md={6}>
                <Link href={{ pathname: '/bibidao' }}>
                  <a>
                    <SmileOutlined /> 逼逼叨
                  </a>
                </Link>
              </Col>
            </Row>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
