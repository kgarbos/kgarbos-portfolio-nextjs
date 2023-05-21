import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton, Tooltip, Box } from '@mui/material';

const ContactSection: React.FC = () => {
  return (
    <Box id="contact" mt={4}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Contact</h1>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Tooltip title="Github" arrow>
          <IconButton color="inherit" aria-label="Github" href="https://github.com/kgarbos" target="_blank">
            <GitHubIcon style={{ fontSize: 150 }} sx={{ '&:hover': { color: 'yellow' } }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn" arrow>
          <IconButton color="inherit" aria-label="LinkedIn" href="https://linkedin.com/in/kgarbos" target="_blank">
            <LinkedInIcon style={{ fontSize: 150 }} sx={{ '&:hover': { color: 'yellow' } }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Email" arrow>
          <IconButton color="inherit" aria-label="Email" href="mailto:kjgarbos@gmail.com">
            <EmailIcon style={{ fontSize: 150 }} sx={{ '&:hover': { color: 'yellow' } }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default ContactSection;