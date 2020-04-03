import Head from 'next/head';
import { Col, Row, List, Breadcrumb, Affix } from 'antd';
import {
  FileAddOutlined,
  CalculatorOutlined,
  FireOutlined
} from '@ant-design/icons';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import '../static/style/pages/detailed.css';
import Tocity from '../components/tocify.tsx';
import axios from 'axios';
import servicePath from '../config/apiUrl';

const Detailed = data => {
  const tocify = new Tocity();
  const renderer = new marked.Renderer();
  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
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
  let html = marked(data.article_content);
  return (
    <div>
      <Head>
        <title>Detailed</title>
        <Header />
      </Head>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">首页</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>文章列表</Breadcrumb.Item>
              <Breadcrumb.Item>xxxx</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className="detailed-title">{data.title}</div>
            <div className="list-icon center">
              <span>
                <CalculatorOutlined />
                {data.addTime}
              </span>
              <span>
                <FileAddOutlined />
                视频教程
              </span>
              <span>
                <FireOutlined />
                4396人
              </span>
            </div>
            <div
              className="detailed-content"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章标题</div>
              {tocify && tocify.render()}
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};
Detailed.getInitialProps = async context => {
  let id = context.query.id;
  const promise = new Promise(resolve => {
    axios(servicePath.getArticleById + id).then(res => {
      resolve(res.data.result[0]);
    });
  });
  return await promise;
};
export default Detailed;
