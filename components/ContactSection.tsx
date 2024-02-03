import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton, Tooltip, Box } from '@mui/material';

const ContactSection: React.FC = () => {
  return (
    <Box id="contact" mt={4} sx={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Contact</h1>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap', // Allow the icons to wrap in smaller screens
          '& > *': {
            margin: '8px', // Add margin to each icon
          },
          '@media (max-width: 600px)': {
            flexDirection: 'column', // Stack the icons vertically on small screens
            '& > *': {
              fontSize: '100px', // Reduce the size of the icons on small screens
            },
          },
        }}
      >
        <Tooltip title="Github" arrow>
          <IconButton color="inherit" aria-label="Github" href="https://github.com/kgarbos" target="_blank">
            <GitHubIcon sx={{ fontSize: 150, '&:hover': { color: 'yellow' } }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn" arrow>
          <IconButton color="inherit" aria-label="LinkedIn" href="https://linkedin.com/in/kgarbos" target="_blank">
            <LinkedInIcon sx={{ fontSize: 150, '&:hover': { color: 'yellow' } }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Email" arrow>
          <IconButton color="inherit" aria-label="Email" href="mailto:kjgarbos@gmail.com">
            <EmailIcon sx={{ fontSize: 150, '&:hover': { color: 'yellow' } }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default ContactSection;