import Head from 'next/head';
import { Col, Row, List, Breadcrumb, Icon, Affix } from 'antd';
import Header from '../components/Header';
import Author from '../components/Author';
import Advert from '../components/Advert';
import Footer from '../components/Footer';
import ReactMarkDown from 'react-markdown';
import MarnNavBar from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import '../static/style/pages/detailed.css';
import axios from 'axios';

const Detailed = () => {
  let markdown =
    '# P01:课程介绍和环境搭建\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
    '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n' +
    '`console.log(111)` \n\n' +
    '# p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n' +
    '***\n\n\n' +
    '# p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '#5 p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '``` var a=11; ```';
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
            <div className="detailed-title">
              React实战视频教程-技术胖Blog开发(更新08集)
            </div>
            <div className="list-icon center">
              <span>
                <Icon type="calendar" />
                2020-03-22
              </span>
              <span>
                <Icon type="folder" />
                视频教程
              </span>
              <span>
                <Icon type="fire" />
                4396人
              </span>
            </div>
            <div className="detailed-content">
              <ReactMarkDown escapeHtml={false} source={markdown} />
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div detailed-nav comm-box>
              <div className="nav-title">文章标题</div>
              <MarnNavBar
                source={markdown}
                ordered={false}
                className="acticle-menu"
              />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};
Detailed.getInitialProps = async () => {
  const promise = new Promise(resolve => {
    axios('http://127.0.0.1:10272/default/getArticleList').then(res => {
      console.log(res);
      resolve(res.data);
    });
  });
  return await promise;
};
export default Detailed;
