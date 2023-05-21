import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Avatar } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const EducationSection: React.FC = () => {
  return (
    <Box id="education" mt={4}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Education</h1>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3} sx={{ borderRadius: '15px', backgroundImage: 'linear-gradient(135deg, #FE6B8B 30%, #FF8E53 90%)', color: 'white' }}>
            <CardContent>
              <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Avatar src="sheridan_college_logo.jpg" sx={{ width: 80, height: 80 }} />
                <SchoolIcon fontSize="large" />
                <Typography variant="h6" align="center" mt={1}>
                  Software Engineering
                </Typography>
                <Typography variant="subtitle1" align="center">
                  Sheridan College
                </Typography>
                <Typography variant="body1" align="center">
                  Oakville, ON
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card elevation={3} sx={{ borderRadius: '15px', backgroundImage: 'linear-gradient(135deg, #FE6B8B 30%, #FF8E53 90%)', color: 'white' }}>
            <CardContent>
              <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Avatar src="university_of_guelph_logo.jpg" sx={{ width: 80, height: 80 }} />
                <SchoolIcon fontSize="large" />
                <Typography variant="h6" align="center" mt={1}>
                  Bachelors in Marketing Management
                </Typography>
                <Typography variant="subtitle1" align="center">
                  University of Guelph
                </Typography>
                <Typography variant="body1" align="center">
                  Guelph, ON
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EducationSection;