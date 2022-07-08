import React from 'react';
import Sorting from './Sorting';
import { Grid } from '@mui/material';
import InfoAboutAlgorithmPage from '../InfoAboutAlgorithmPage';
const VisualizationPage = ({ algorithmType, algorithmName }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      rowSpacing={1}
      columnSpacing={0}
    >
      <Grid item xs={12}>
        {algorithmType === 'GRAPH-TRAVERSAL' ? (
          <></>
        ) : (
          <Sorting algorithmName={algorithmName} />
        )}
      </Grid>
      <Grid item xs={12}>
        <InfoAboutAlgorithmPage
          algorithmType={algorithmType}
          algorithmName={algorithmName}
        />
      </Grid>
    </Grid>
  );
};

export default VisualizationPage;
