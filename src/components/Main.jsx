import React from 'react';
import NavigationBar from './NavigationBar';
import Container from '@mui/material/Container';
import BubbleSort from './D3/Sorting/BubbleSort';

const Main = () => {

  return (
    <Container>
      <NavigationBar/>
      <BubbleSort/>
    </Container>
  );
};

export default Main;
