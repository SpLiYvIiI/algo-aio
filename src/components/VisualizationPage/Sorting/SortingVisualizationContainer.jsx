import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Grid } from '@mui/material';

// this component just initializes svg and draws data on change
const SortingVisualizationContainer = ({ data, setIsSorting }) => {
  const svgContainerRef = useRef();
  const svgContainerStyles = {
    height: 250,
    width: '100%',
  };

  useEffect(() => {
    setIsSorting(false);
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
        return i * 70 + (window.innerWidth - 700) / 2;
      })
      .attr('y', d => {
        return 250 - d.height;
      })
      .attr('id', d => {
        return d.id;
      });
  }, [data]);

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        style={{
          borderStyle: 'solid',
        }}
      >
        <svg ref={svgContainerRef} style={svgContainerStyles}></svg>
      </Grid>
    </Grid>
  );
};

export default SortingVisualizationContainer;
