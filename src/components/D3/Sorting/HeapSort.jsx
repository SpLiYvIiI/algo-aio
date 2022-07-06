import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import Container from '@mui/material/Container';
import { delay, seedDataRectangles } from '../../../utils';

const HeapSort = () => {
  const [data, setData] = useState(seedDataRectangles());
  const [isSorting, setIsSorting] = useState(false);
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

  const Heapify = async (arr, n, i) => {
    let largest = i;
    const l = 2 * i + 1; 
    const r = 2 * i + 2;

    if (l < n && arr[l].height > arr[largest].height)
        largest = l;

    if (r < n && arr[r].height > arr[largest].height)
        largest = r;

    if (largest !== i) {

        var tmp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = tmp;
        
        const firstId = arr[i].id
        const secondId = arr[largest].id            
        const firstRect = d3.select(`#${firstId}`);
        const secondRect = d3.select(`#${secondId}`);
        

        firstRect
            .transition()
            .duration(100)
            .ease(d3.easeLinear)
            .attr('x', document.getElementById(secondId).getAttribute('x'));
        secondRect
            .transition()
            .duration(100)
            .ease(d3.easeLinear)
            .attr('x', document.getElementById(firstId).getAttribute('x'));
        
        await delay(200);

        await Heapify(arr, n, largest);
    }
  }



  const HeapSortAlg = async (arr) => {
    const n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--){
        await Heapify(arr, n, i);
    }

    for (var i = n - 1; i > 0; i--) {
        const tmp = arr[0];
        arr[0] = arr[i];
        arr[i] = tmp;
        
        const firstId = arr[0].id
        const secondId = arr[i].id            
        const firstRect = d3.select(`#${firstId}`);
        const secondRect = d3.select(`#${secondId}`);
        

        firstRect
            .transition()
            .duration(100)
            .ease(d3.easeLinear)
            .attr('x', document.getElementById(secondId).getAttribute('x'));
        secondRect
            .transition()
            .duration(100)
            .ease(d3.easeLinear)
            .attr('x', document.getElementById(firstId).getAttribute('x'));
        
        await delay(200);

        await Heapify(arr, i, 0);
    }
  }


  const HeapSort = async () => {
    setIsSorting(true);
    const temp = data;
    
    HeapSortAlg(temp);

    setIsSorting(false);
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
      .attr('width', 10)
      .attr('height', d => {
        return d.height;
      })
      .attr('x', function (d, i) {
        return i * 15;
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
      <svg ref={svgContainerRef} style={svgContainerStyles}></svg>
      <button disabled={isSorting} onClick={() => {changeInitData()}}>
        Randomize array
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button disabled={isSorting} onClick={() => {HeapSort()}}>
        Sort
      </button>
    </Container>
  );
};

export default HeapSort;
