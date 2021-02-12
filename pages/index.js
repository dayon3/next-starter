import Head from 'next/head';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();

    router.push('/pokemon');
  };

  return (
    <>
      <Head>
        <title>My Next.js Site!</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <div>Welcome, Explorer!</div>
      <button onClick={handleClick}>Click Me!</button>
    </>
  );
}

export default Home;
