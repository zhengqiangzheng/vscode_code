import Head from 'next/head';
import Link from 'next/link';
import { Col, Row, Icon, List } from 'antd';
import Header from '../components/Header';
import React, { useState } from 'react';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import '../static/style/pages/index.css';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import '../static/style/pages/detailed.css';
import axios from 'axios';
import servicePath from '../config/apiUrl';

const Home = list => {
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
  return (
    <div>
      <Head>
        <title>Home</title>
        <Header />
      </Head>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
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
                    <Icon type="calendar" />
                    {item.addTime}
                  </span>
                  <span>
                    <Icon type="folder" />
                    {item.typeName}
                  </span>
                  <span>
                    <Icon type="fire" />
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
Home.getInitialProps = async () => {
  const promise = new Promise(resolve => {
    axios(servicePath.getArticleList).then(res => {
      resolve(res.data);
    });
  });
  return await promise;
};
export default Home;
