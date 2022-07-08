import React from 'react';
import Navigation from '../Navigation';
import { Grid } from '@mui/material';
import About from './About';
import SortingAlgorithms from './SortingAlgorithms';
import GraphTraversalAlgorithms from './GraphTraversalAlgorithms';

const AlgorithmsNavigationPage = () => {
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
          <About />
        </Grid>
        <Grid item xs={12}>
          <SortingAlgorithms />
        </Grid>
        <Grid item xs={12}>
          <GraphTraversalAlgorithms />
        </Grid>
      </Grid>
    </div>
  );
};

export default AlgorithmsNavigationPage;
