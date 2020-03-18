import Link from 'next/link';
import Router from 'next/router';
const Home = () => (
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

export default Home;
