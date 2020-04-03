import Head from 'next/head';
import { Col, Row, List, Breadcrumb } from 'antd';
import {
  CalendarOutlined,
  FolderAddOutlined,
  FireOutlined
} from '@ant-design/icons';
import Header from '../components/Header';
import React, { useState, useEffect } from 'react';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import axios from 'axios';
import Link from 'next/link';
import servicePath from '../config/apiUrl';
import hljs from 'highlight.js';
import marked from 'marked';
import 'highlight.js/styles/monokai-sublime.css';
import '../static/style/pages/list.css';

const list = list => {
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    }
  });
  const [mylist, setMylist] = useState(list.result);
  useEffect(() => {
    setMylist(list.result);
  });
  return (
    <div>
      <Head>
        <title>list</title>
        <Header />
      </Head>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <a href="/"> 首页</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>文章列表</Breadcrumb.Item>
          </Breadcrumb>
          <List
            header="最新日志"
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              <List-item>
                <div className="list-title">
                  <Link
                    href={{ pathname: '/detailed', query: { id: item.id } }}
                  >
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span>
                    <CalendarOutlined />
                    {item.addTime}
                  </span>
                  <span>
                    <FolderAddOutlined />
                    {item.typeName}
                  </span>
                  <span>
                    <FireOutlined />
                    {item.view_count}人
                  </span>
                </div>
                <div
                  className="list-context"
                  dangerouslySetInnerHTML={{ __html: item.introduce }}
                ></div>
              </List-item>
            )}
          ></List>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert></Advert>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};
list.getInitialProps = async context => {
  let id = context.query.id;
  const promise = new Promise(resolve => {
    axios(servicePath.getListById + id).then(res => {
      console.log(res.data);
      resolve(res.data);
    });
  });
  return await promise;
};
export default list;
