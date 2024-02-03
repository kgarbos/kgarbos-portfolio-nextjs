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
      <main style={{ minHeight: 'calc(100vh - 100px)' }}> {/* Adjust '100px' to account for the header and any other fixed height elements */}
        <h1 style={{ textAlign: 'center' }}>Blog</h1>
        <h3 style={{ textAlign: 'center' }}>Coming soon...</h3>
      </main>
      <Footer />
    </>
  );
};

export default Blog;