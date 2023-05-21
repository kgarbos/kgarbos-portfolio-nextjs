import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Chip, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ProjectCardProps {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  languages: string[];
  topics: string[];
}

const languageColorMap = {
  JavaScript: { backgroundColor: '#f7df1e', textColor: '#000' },
  TypeScript: { backgroundColor: '#3178c6', textColor: '#fff' },
  HTML: { backgroundColor: '#e34f26', textColor: '#fff' },
  CSS: { backgroundColor: '#1572b6', textColor: '#fff' },
  SCSS: { backgroundColor: '#c6538c', textColor: '#fff' },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, html_url, homepage, languages, topics }) => {
  const [previewImage, setPreviewImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/kgarbos/${name}/main/preview.jpg`)
      .then((response) => {
        if (!response.ok) throw new Error('Could not fetch image from main branch');
        setPreviewImage(response.url);
      })
      .catch(() =>
        fetch(`https://raw.githubusercontent.com/kgarbos/${name}/master/preview.jpg`)
          .then((response) => {
            if (!response.ok) throw new Error('Could not fetch image from master branch');
            setPreviewImage(response.url);
          })
          .catch(() => setPreviewImage('/path/to/default/image.jpg'))
      );
  }, [name]);

  return (
    <Card sx={{
      backgroundColor: '#f5f5f5',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      transition: '0.3s',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      }
    }}>
      <CardActionArea component="a" href={homepage || html_url} target="_blank">
        {previewImage && (
          <CardMedia
            component="img"
            height="140"
            image={previewImage}
            alt={name}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={html_url} target="_blank">
          <GitHubIcon sx={{ fontSize: 40, color: '#333' }} />
        </Button>
        <div>
          {languages.map((language, index) => (
            <Chip
              size="small"
              label={language}
              key={index}
              style={{
                margin: '4px',
                backgroundColor: languageColorMap[language]?.backgroundColor || '#ddd',
                color: languageColorMap[language]?.textColor || '#000',
              }}
            />
          ))}
          {topics.map((topic, index) => (
            <Chip
              size="small"
              label={topic}
              key={index}
              style={{
                margin: '4px',
                backgroundColor: topic === 'Procfile' ? '#ddd' : '#c8e6c9',
                color: '#000',
              }}
            />
          ))}
        </div>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;