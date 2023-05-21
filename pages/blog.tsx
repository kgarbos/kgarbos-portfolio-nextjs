import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog: React.FC = () => {
  return (
    <>
      <Head>
        <title>Krzysztof Garbos - Blog</title>
      </Head>
      <Header />
      <main>
        <h1>Blog</h1>
        <h3>Coming soon...</h3>
      </main>
      <Footer />
    </>
  );
};

export default Blog;