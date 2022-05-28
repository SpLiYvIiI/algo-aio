import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import Container from '@mui/material/Container';

const Node = ({ data, changeRacxa }) => {
  const racxa = useRef()
  useEffect(()=>{

      const svg = d3.select(racxa.current)
      svg
        .selectAll('circle')
        .data(data)
        .join('circle')
        .style('stroke', 'gray')
        .style('fill', 'black')
        .attr('r', function(d){
          console.log("ragaca2");
          return d.radius
        })
        .attr('cx', function (d, i) {
          return (d.radius+10) + i * ((2*d.radius) + 10);
        })
        .attr('cy', 120);
        svg.exit().remove();
    },
    [data])

  return (
    <Container fixed>
     <svg
      ref={racxa}
      style={{
        height: 300,
        paddingTop: 100,
        width: 1000,
        marginRight: '0px',
        marginLeft: '0px',
      }}
      >
     </svg>
      <button onClick={()=> changeRacxa()}>shecvale radiusi</button>
    </Container>
  );
};

export default Node;
