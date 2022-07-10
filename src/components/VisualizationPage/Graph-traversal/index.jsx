import React from 'react';
import Visualization from './Visualization';
import { Grid } from '@mui/material';
import Navigation from '../../Navigation';
const GraphTraversal = ({ algorithmName }) => {
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
          <Visualization algorithmName={algorithmName} />
        </Grid>
      </Grid>
    </div>
  );
};

export default GraphTraversal;
