import React from 'react';
import { Grid } from '@mui/material';
import algoaiologo from '../static/algo-aio-logo.png';
import { useNavigate } from 'react-router-dom';
const Navigation = () => {
  const navigate = useNavigate();

  const goToHomePage = e => {
    navigate('/');
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <img
          src={algoaiologo}
          alt={'logo'}
          style={{
            height: '50px',
            width: 'auto',
            cursor: 'pointer',
          }}
          onClick={() => goToHomePage()}
        />
      </Grid>
    </Grid>
  );
};

export default Navigation;
