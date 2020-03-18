import { withRouter } from 'next/router';
import Link from 'next/link';
import data from './mock/data';
import axios from 'axios';
import Mock from 'mockjs';

Mock.mock('/api/getData', {
  data
});
const Breakfast = ({ router }) => {
  return (
    <>
      <div>
        <Link href="/">
          <a>返回首页</a>
        </Link>
      </div>
      <h2>你定了套餐{router.query.meal}</h2>
    </>
  );
};
Breakfast.getInitialProps = async () => {
  const promise = new Promise(resolve => {
    axios.get('/api/getData').then(res => {
      console.log('远程数据结果：', res);
      resolve(res.data.data);
    });
  });
  return await promise;
};
export default withRouter(Breakfast);
