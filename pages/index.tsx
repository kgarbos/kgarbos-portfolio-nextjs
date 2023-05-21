import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import BackgroundSection from '../components/BackgroundSection';
import ContactSection from '../components/ContactSection';
import EducationSection from '../components/EducationSection';
import { Element } from 'react-scroll';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Krzysztof Garbos - Portfolio</title>
        <meta name="description" content="Krzysztof Garbos, Software Developer skilled in JavaScript/Typescript, React, Next.js, MongoDB, PHP, Node.js. Experience in developing internal tools/apps, shipping modules and HMI controller software. Worked on MERN Authentication App, MERN CRUD App, React Hook Form App. Graduated from Sheridan College with a degree in Software Engineering. Available to work in Canada, Europe, USA and Poland." />
        <meta property="og:title" content="Krzysztof Garbos - Software Developer | JavaScript/Typescript, React, Next.js, MongoDB, PHP, Node.js | Portfolio" />
        <meta property="og:description" content="Krzysztof Garbos, Software Developer skilled in JavaScript/Typescript, React, Next.js, MongoDB, PHP, Node.js. Experience in developing internal tools/apps, shipping modules and HMI controller software. Worked on MERN Authentication App, MERN CRUD App, React Hook Form App. Graduated from Sheridan College with a degree in Software Engineering. Available to work in Canada, Europe, and Poland." />
        <meta property="og:url" content="https://kgarbos.com" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Element name="top">
        <Header />
      </Element>
      <main>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <BackgroundSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;