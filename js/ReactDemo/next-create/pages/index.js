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
  </>
);

export default Home;
