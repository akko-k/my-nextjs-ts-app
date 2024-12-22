import Head from 'next/head';

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About Us - My Next.js App</title>
        <meta
          name="description"
          content="Learn more about our team and mission."
        />
        <meta
          property="og:title"
          content="About Us - My Next.js App"
        />
        <meta
          property="og:description"
          content="Learn more about our team and mission at My Next.js App."
        />
      </Head>
      <h1>About Us</h1>
      <p>
        Learn more about our team and mission at My Next.js
        App.
      </p>
    </div>
  );
}
