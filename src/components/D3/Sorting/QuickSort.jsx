import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import Container from '@mui/material/Container';
import { delay, seedDataRectangles } from '../../../utils';

const QuickSort = () => {
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


  const partition = async (arr, low, high) => {
    const pivot = arr[high];
    let i = (low - 1);
 
    for (let j = low; j <= high - 1; j++) {
        if (arr[j].height < pivot.height) {
            i++;
            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            
            const firstId = arr[i].id
            const secondId = arr[j].id            
            const firstRect = d3.select(`#${firstId}`);
            const secondRect = d3.select(`#${secondId}`);
           
            firstRect
                .transition()
                .duration(300)
                .ease(d3.easeLinear)
                .attr('x', document.getElementById(secondId).getAttribute('x'));
            secondRect
                .transition()
                .duration(300)
                .ease(d3.easeLinear)
                .attr('x', document.getElementById(firstId).getAttribute('x'));
            
            await delay(600);
        }
    }
    const tmp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = tmp;
    
    const firstId = arr[i + 1].id
    const secondId = arr[high].id            
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

    return (i + 1);
  }

  const QuickSortAlg = async (arr, low, high) => {
    console.log("hellooooo")
    if (low < high) {
      const pi = await partition(arr, low, high);

      await QuickSortAlg(arr, low, pi - 1);
      await QuickSortAlg(arr, pi + 1, high);
    }
  }

  const QuickSort = () => {
    setIsSorting(true);
    const temp = data;
    
    const low = 0;
    const high = temp.length - 1;

    QuickSortAlg(temp, low, high);

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
      <button disabled={isSorting} onClick={() => {QuickSort()}}>
        Sort
      </button>
    </Container>
  );
};

export default QuickSort;
