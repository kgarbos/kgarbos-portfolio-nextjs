import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ContactSection from './ContactSection'; // Import the ContactSection component

const Footer: React.FC = () => {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: '#333',
          borderTop: 'px solid #777',
          color: 'white',
          textAlign: 'center',
          padding: '20px 0',
        }}
      >
        <Container>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Krzysztof Garbos. All rights reserved.
          </Typography>
          <ContactSection />
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;