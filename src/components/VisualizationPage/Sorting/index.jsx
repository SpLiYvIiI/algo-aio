import React from 'react';
import SortingVisualization from './SortingVisualization';
import { Grid } from '@mui/material';
import Navigation from '../../Navigation';
const Sorting = ({ algorithmName }) => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        rowSpacing={2}
        columnSpacing={0}
      >
        <Grid item xs={12}>
          <Navigation />
        </Grid>
        <Grid item xs={12}>
          <SortingVisualization algorithmName={algorithmName} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Sorting;
