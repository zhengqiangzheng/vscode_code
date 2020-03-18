import { withRouter } from 'next/router';
import Link from 'next/link';
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
export default withRouter(Breakfast);
