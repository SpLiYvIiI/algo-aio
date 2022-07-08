import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { learningMaterial } from '../../common/consts';
import * as React from 'react';

const Overveiw = ({ algorithmType, algorithmName }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100%"
    >
      <Grid item xs={6}>
        <Typography>
          {learningMaterial[algorithmType][algorithmName].overview}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>
          <Typography>
            Worst case :{' '}
            {learningMaterial[algorithmType][algorithmName].complexities.worst}
          </Typography>
          <Typography>
            Average case :{' '}
            {
              learningMaterial[algorithmType][algorithmName].complexities
                .average
            }
          </Typography>
          <Typography>
            Best case :{' '}
            {learningMaterial[algorithmType][algorithmName].complexities.best}
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Overveiw;
