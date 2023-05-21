import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Krzysztof Garbos. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;