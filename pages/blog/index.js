import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
    <>
      <Head>
        <title>My Blog!</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <div>Welcome, blog reader!</div>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
}

export default Home;
