import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import LaptopIcon from '@mui/icons-material/Laptop';

const ProjectsSection: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/projects');
  };

  return (
    <div id="projects" style={{ marginTop: '40px' }}>
      <div style={{ textAlign: 'center' }}>
        <IconButton
          color="primary"
          onClick={handleButtonClick}
          sx={{
            width: 250,
            height: 250,
            borderRadius: '50%',
            backgroundColor: 'black',
            '&:hover': {
              backgroundColor: '#f7c447',
              '& .MuiIconButton-label': {
                color: 'yellow',
              },
            },
          }}
        >
          <Typography variant="h6" style={{ color: 'white' }}>
            Projects
          </Typography>
          <LaptopIcon fontSize="large" style={{ color: 'white' }} />
        </IconButton>
      </div>
    </div>
  );
};

export default ProjectsSection;