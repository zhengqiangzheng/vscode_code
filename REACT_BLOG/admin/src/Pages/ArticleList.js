import React, { useState, useEffect } from 'react';
import '../static/css/ArticleList.css';
import { List, Row, Col, Modal, Button, message } from 'antd';
import axios from 'axios';
import servicePath from '../config/apiUrl';
const { confirm } = Modal;

function ArticleList(props) {
  const [list, setList] = useState([]);
  const getList = () => {
    axios({
      method: 'get',
      url: servicePath.getArticleList,
      withCredentials: true,
      header: { 'Access-Control-Allow-Origin': '*' },
    }).then((res) => {
      console.log(res.data.list);
      let list = res.data.list;
      setList(list);
    });
  };
  useEffect(() => {
    getList();
  }, []);
  const updateArticle = (id) => {
    props.history.push('/index/add/' + id);
  };
  const delArticle = (id) => {
    confirm({
      title: '是否删除此文章',
      content: '如果点击ok按钮，将不可恢复文章!',
      onOk() {
        axios({
          method: 'GET',
          url: servicePath.delArticle + id,
          withCredentials: true,
        }).then((res) => {
          message.success('删除成功!');
          getList();
        });
      },
      onCancel() {
        message.success('没有变化!');
      },
    });
  };
  return (
    <div>
      <List
        header={
          <Row className="list-div">
            <Col span={8}>
              <b>标题</b>
            </Col>
            <Col span={3}>
              <b>类别</b>
            </Col>
            <Col span={3}>
              <b>发布时间</b>
            </Col>
            <Col span={3}>
              <b>集数</b>
            </Col>
            <Col span={3}>
              <b>浏览量</b>
            </Col>

            <Col span={4}>
              <b>操作</b>
            </Col>
          </Row>
        }
        dataSource={list}
        bordered
        renderItem={(item) => (
          <List.Item>
            <Row className="list-div">
              <Col span={8}>
                <b>{item.title}</b>
              </Col>
              <Col span={3}>
                <b>{item.typeName}</b>
              </Col>
              <Col span={3}>
                <b>{item.addTime}</b>
              </Col>
              <Col span={3}>
                <b>集数</b>
              </Col>
              <Col span={3}>
                <b> {item.view_count}</b>
              </Col>

              <Col span={4}>
                <Button
                  type="primary"
                  onClick={() => {
                    updateArticle(item.id);
                  }}
                >
                  修改
                </Button>
                &nbsp;
                <Button
                  type="primary"
                  onClick={() => {
                    delArticle(item.id);
                  }}
                >
                  删除
                </Button>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </div>
  );
}
export default ArticleList;
