import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { aboutProjectText } from '../../common/consts';

const About = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      rowSpacing={2}
      columnSpacing={0}
    >
      <Grid item xs={12} sx={{ borderBottom: 2, borderColor: 'divider' }}>
        <Typography variant="h5">About project</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          style={{
            fontSize: '20px',
          }}
        >
          {aboutProjectText}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
