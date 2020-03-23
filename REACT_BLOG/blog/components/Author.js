import { Avatar, Divider } from 'antd';
import '../static/style/components/autho.css';

function Author() {
  return (
    <>
      <div className="author-div comm-box">
        <div>
          <Avatar size={100} src="../static/pics/头像.jpg" />
        </div>
        <div className="author-introduction">
          18年毕业的.net开发工程师
          <Divider>社交帐号</Divider>
          <Avatar size={28} icon="github" className="account" />
          <Avatar size={28} icon="qq" className="account" />
          <Avatar size={28} icon="wechat" className="account" />
        </div>
      </div>
    </>
  );
}
export default Author;
