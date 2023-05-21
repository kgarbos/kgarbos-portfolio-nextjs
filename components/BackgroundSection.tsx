import React from 'react';
import { Card, Grid, Box } from '@mui/material';

const BackgroundSection: React.FC = () => {
  return (
    <Box id="background" mt={4}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Background</h1>
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3} sx={{ borderRadius: '15px', backgroundImage: 'url(/canada_flag.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: 250 }}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3} sx={{ borderRadius: '15px', backgroundImage: 'url(/poland_flag.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: 250 }}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3} sx={{ borderRadius: '15px', backgroundImage: 'url(/eu_flag.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: 250 }}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BackgroundSection;