import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material';
import { learningMaterial } from '../../common/consts';
import { useNavigate } from 'react-router-dom';
const SortingAlgorithms = () => {
  const navigate = useNavigate();
  const redirectToProperPage = (event, algoName) => {
    event.preventDefault();
    navigate(`/algorithms/${algoName}`);
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      rowSpacing={2}
      columnSpacing={2}
    >
      <Grid item xs={12} sx={{ borderBottom: 2, borderColor: 'divider' }}>
        <Typography variant="h5">Graph-traversal algorithms</Typography>
      </Grid>
      {Object.keys(learningMaterial['GRAPH-TRAVERSAL']).map((key, id) => {
        return (
          <Grid key={id} item xs={2}>
            <Card
              sx={{ maxWidth: 300 }}
              onClick={event => redirectToProperPage(event, key)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={require('../../static/dfsbfs.gif')}
                  alt={key}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {learningMaterial['GRAPH-TRAVERSAL'][key].fancyName}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SortingAlgorithms;
