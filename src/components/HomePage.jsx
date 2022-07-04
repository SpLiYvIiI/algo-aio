import React from 'react';
import { Button, Grid } from '@mui/material';
import algoaiologo from '../static/algo-aio-logo.png';
import { useNavigate } from 'react-router-dom';
import ParticlesBackground from './ParticlesBackground';

const HomePage = () => {
  const navigate = useNavigate();
  const redirectToAlgorithmsPage = e => {
    navigate('/algorithms');
  };

  return (
    <div>
      <ParticlesBackground />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '80vh' }}
      >
        <Grid item xs={3}>
          <img src={algoaiologo} alt={'logo'} />
        </Grid>
        <Grid item xs={4}>
          <Button
            style={{
              borderRadius: 35,
              backgroundColor: '#000000',
              color: '#ffffff',
              padding: '18px 36px',
              fontSize: '18px',
            }}
            variant="contained"
            onClick={() => redirectToAlgorithmsPage()}
          >
            Explore
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
