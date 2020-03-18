import Link from 'next/link';
import Router from 'next/router';


const Home = () => {
  Router.events.on('routeChangeStart', (...args) => {
    console.log('1.routeChangeStart->路由开始变化,参数为:', ...args);
  });

  Router.events.on('routeChangeComplete', (...args) => {
    console.log('2.routeChangeComplete->路由结束变化,参数为:', ...args);
  });

  Router.events.on('beforeHistoryChange', (...args) => {
    console.log(
      '3,beforeHistoryChange->在改变浏览器 history之前触发,参数为:',
      ...args
    );
  });

  Router.events.on('routeChangeError', (...args) => {
    console.log('4,routeChangeError->跳转发生错误,参数为:', ...args);
  });

  Router.events.on('hashChangeStart', (...args) => {
    console.log('5,hashChangeStart->hash跳转开始时执行,参数为:', ...args);
  });

  Router.events.on('hashChangeComplete', (...args) => {
    console.log('6,hashChangeComplete->hash跳转完成时,参数为:', ...args);
  });
  return (
    <>
      <h2>
        <Link href="/PageA">
          <a>page a</a>
        </Link>
        <br />
        <Link href="/PageB">
          <a>page B</a>
        </Link>
      </h2>
      <button
        onClick={() => {
          Router.push('/PageA');
        }}
      >
        GO to page A
      </button>{' '}
      <br></br>
      <button
        onClick={() => {
          Router.push('/PageB');
        }}
      >
        GO to page B
      </button>
      <br />
      <ul>
        <li>
          <Link href="/breakfast?meal=1">
            <a>点一号套餐</a>
          </Link>
        </li>

        <li>
          <Link href={{ query: { meal: 2 }, pathname: '/breakfast' }}>
            <a>点二号套餐</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
