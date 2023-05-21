import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Grid, Typography } from '@mui/material';
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

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://api.github.com/users/kgarbos/repos')
      .then((response) => response.json())
      .then(async (data: Repository[]) => {
        const fetchData = async () => {
          const promises = data.map(async (repo) => {
            const languagesResponse = await fetch(`https://api.github.com/repos/kgarbos/${repo.name}/languages`);
            const topicsResponse = await fetch(`https://api.github.com/repos/kgarbos/${repo.name}/topics`, {
              headers: {
                'Accept': 'application/vnd.github.mercy-preview+json'
              }
            });
            const languages = await languagesResponse.json();
            const topics = await topicsResponse.json();
  
            repo.languages = Object.keys(languages);
            repo.topics = topics.names || [];
          });
  
          await Promise.all(promises);
        };
  
        fetchData().then(() => {
          data.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
          setRepos(data);
          setLoading(false);
        });
      });
  }, []);

  return (
    <>
      <Head>
        <title>Krzysztof Garbos - Projects</title>
      </Head>
      <Header />
      <main>
        <Typography variant="h4" component="div" align="center" gutterBottom>
          <h1>Projects</h1>
        </Typography>
        <Grid container spacing={3}>
          {repos.map((repo, i) => (
            <Grid item xs={12} sm={6} md={4} key={repo.name}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
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
      </main>
      <Footer />
    </>
  );
};

export default Projects;