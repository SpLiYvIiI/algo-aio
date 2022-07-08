import React from 'react';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

const GraphTraversalAlgorithms = () => {
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
        <Typography variant="h5">Graph traversal algorithms</Typography>
      </Grid>
    </Grid>
  );
};

export default GraphTraversalAlgorithms;
