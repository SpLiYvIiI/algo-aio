import React from 'react';
import Typography from '@mui/material/Typography';
import { learningMaterial } from '../../common/consts';
import { Grid } from '@mui/material';
const AdditionalSources = ({ algorithmType, algorithmName }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100%"
    >
      <Grid xs={12}>
        <ul>
          {learningMaterial[algorithmType][algorithmName].additionalSources.map(
            (source, id) => {
              return (
                <li key={id}>
                  <a href={source}>
                    <Typography>{source}</Typography>
                  </a>
                </li>
              );
            }
          )}
        </ul>
      </Grid>
    </Grid>
  );
};

export default AdditionalSources;
