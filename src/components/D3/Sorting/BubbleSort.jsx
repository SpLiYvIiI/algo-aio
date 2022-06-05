import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import Container from '@mui/material/Container';
import { delay, seedDataRectangles } from '../../../utils';

const BubbleSort = () => {
  const [data, setData] = useState(seedDataRectangles());
  const [isSorting,setIsSorting] = useState(false)
  const svgContainerRef = useRef();
  const svgContainerStyles = {
    height: 300,
    paddingTop: 100,
    width: 1000,
    marginRight: '0px',
    marginLeft: '0px',
  };

  const changeInitData = () => {
    const newRadius = data.map(obj => {
      const racxa = Math.round(Math.random() * 200);
      obj.height = racxa;
      return obj;
    });
    setData(newRadius);
  };

  const bubbleSort = async () => {
    setIsSorting(true)
    const temp = data;
    for (let i = 0; i < temp.length; i++) {
      for (let j = 0; j < temp.length - i - 1; j++) {
        if (temp[j].height > temp[j + 1].height) {
          const firstId = temp[j].id;
          const secondId = temp[j + 1].id;
          const tmp = temp[j];
          temp[j] = temp[j + 1];
          temp[j + 1] = tmp;
          const firstRect = d3.select(`#${firstId}`);
          const secondRect = d3.select(`#${secondId}`);
          firstRect
            .transition()
            .duration(500)
            .ease(d3.easeLinear)
            .attr('x', document.getElementById(secondId).getAttribute('x'));
          secondRect
            .transition()
            .duration(500)
            .ease(d3.easeLinear)
            .attr('x', document.getElementById(firstId).getAttribute('x'));
          await delay(600);
        }
      }
    }
    setIsSorting(false)
  };

  useEffect(() => {
    const svg = d3.select(svgContainerRef.current);
    svg.selectAll('*').interrupt();
    svg
      .selectAll('rect')
      .data(data)
      .join('rect')
      .style('stroke', 'gray')
      .style('fill', 'black')
      .attr('width', 50)
      .attr('height', d => {
        return d.height;
      })
      .attr('x', function (d, i) {
        return i * 70;
      })
      .attr('y', d => {
        return 300 - d.height;
      })
      .attr('id', d => {
        return d.id;
      });
  }, [data]);

  return (
    <Container fixed>
      <svg
        ref={svgContainerRef}
        style={svgContainerStyles}
      ></svg>
      <button disabled={isSorting} onClick={() => changeInitData()}>Randomize array</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button disabled={isSorting} onClick={() => bubbleSort()}>Sort</button>
    </Container>
  );
};

export default BubbleSort;
