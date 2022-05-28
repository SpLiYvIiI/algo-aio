import React, { useState } from 'react';
import BarChart from './Circles';

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
    <div className="App">
      <header className="App-header">
        <BarChart data={data}  changeRacxa={changeRacxa}/>
      </header>
    </div>
  );
};

export default Main;
