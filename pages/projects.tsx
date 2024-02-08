import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Grid, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  created_at: string;
  languages: string[];
  topics: string[];
}

const staticProjects = [
  {
    name: "Dawn's Catering Website",
    description: "A catering company website with a custom WordPress theme and interactive features using JavaScript and MySQL for content management.",
    homepage: "https://www.dawns-catering.com/",
    languages: ['JavaScript', 'PHP', 'HTML', 'CSS', 'WordPress', 'MySQL'],
    topics: [],
    image: '/dawns_catering.png',
  },
];

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchRepoDetails = async (repo: Repository) => {
    const languagesResponse = await fetch(`https://api.github.com/repos/kgarbos/${repo.name}/languages`);
    const languages = await languagesResponse.json();

    const topicsResponse = await fetch(`https://api.github.com/repos/kgarbos/${repo.name}/topics`, {
      headers: { 'Accept': 'application/vnd.github.mercy-preview+json' },
    });
    const topics = await topicsResponse.json();

    return {
      ...repo,
      languages: Object.keys(languages),
      topics: topics.names || [],
    };
  };

  useEffect(() => {
    const cacheKey = 'github-repos';

    const loadRepos = async () => {
      setLoading(true);

      const cachedRepos = localStorage.getItem(cacheKey);
      if (cachedRepos) {
        setRepos(JSON.parse(cachedRepos));
        setLoading(false);
      } else {
        const response = await fetch('https://api.github.com/users/kgarbos/repos');
        const repoData = await response.json();

        const detailedRepos = await Promise.all(repoData.map(fetchRepoDetails));

        detailedRepos.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

        setRepos(detailedRepos);
        localStorage.setItem(cacheKey, JSON.stringify(detailedRepos));
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  if (loading) {
    return (
      <>
        <Head>
          <title>Loading Projects...</title>
        </Head>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 100px)' }}>
          <Grid container justifyContent="center" alignItems="center">
            <CircularProgress />
          </Grid>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Head>
        <title>Krzysztof Garbos - Projects</title>
      </Head>
      <Header />
      <main style={{ flex: 1 }}>
        <Typography variant="h4" component="div" align="center" gutterBottom>
          <h1>Projects</h1>
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {repos.map((repo, i) => (
            <Grid item xs={12} sm={6} md={4} className="my-grid-item" key={repo.name}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <ProjectCard
                  name={repo.name}
                  description={repo.description}
                  html_url={repo.html_url}
                  homepage={repo.homepage}
                  languages={repo.languages}
                  topics={repo.topics}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h6" component="div" align="center" gutterBottom className="section-title">
          <h2>Freelance Projects</h2>
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {staticProjects.map((project, i) => (
            <Grid item xs={12} sm={6} md={4} key={project.name}>
              <ProjectCard
                name={project.name}
                description={project.description}
                homepage={project.homepage}
                languages={project.languages}
                topics={project.topics}
                image={project.image}
              />
            </Grid>
          ))}
        </Grid>

      </main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: repos.length * 0.1 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Projects;