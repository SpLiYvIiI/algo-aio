import React, {useState} from 'react';
import NavigationBar from './NavigationBar';
import Container from '@mui/material/Container';
import Circles from './D3/Circles';

const Main = () => {
  const [data,setData] = useState([{radius: 40},{radius: 40},{radius: 40},{radius: 40}])

  const changeRacxa = () =>{
    const racxa = Math.round(Math.random() * 100);
    const newRadius = data.map(obj => {
      obj.radius = racxa;
      return obj
    })
    setData(newRadius)
  }


  return (
    <Container>
      <NavigationBar/>
      <Circles data={data} changeRacxa={changeRacxa}/>
    </Container>
  );
};

export default Main;
