import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Grid } from '@mui/material';

// this component just initializes svg and draws data on change
const VisualizationContainer = ({
  data,
  onClickFunction,
  setOnClickFunction,
  addVertex,
  dummySetter,
}) => {
  const svgContainerRef = useRef();

  const svgContainerStyles = {
    height: 400,
    width: '100%',
  };

  useEffect(() => {
    const svg = d3.select(svgContainerRef.current);

    console.log(data);
    svg.selectAll('*').interrupt();
    svg.selectAll('*').remove();
    svg
      .selectAll('line')
      .data(data.edges)
      .join('line')
      .style('stroke', 'black')
      .style('stroke-width', '2px')
      .attr('x1', function (d) {
        return data.nodes[d.source].x;
      })
      .attr('y1', function (d) {
        return data.nodes[d.source].y;
      })
      .attr('x2', function (d) {
        return data.nodes[d.target].x;
      })
      .attr('y2', function (d) {
        return data.nodes[d.target].y;
      })
      .attr('id', function (d) {
        return d.id;
      });

    const elem = svg.selectAll('g').data(data.nodes);

    const elemEnter = elem.join('g').attr('transform', d => {
      return `translate(${d.x},${d.y})`;
    });

    elemEnter
      .append('circle')
      .attr('r', d => {
        return d.r;
      })
      .attr('stroke', 'black')
      .attr('fill', 'white')
      .attr('id', d => {
        return d.id;
      });

    elemEnter
      .append('text')
      .attr('dx', d => {
        return -5;
      })
      .attr('dy', () => {
        return 5;
      })
      .text(d => {
        return d.label;
      });
    svg.on('click', function (event) {
      if (onClickFunction) {
        const coords = d3.pointer(event);
        addVertex(coords[0], coords[1]);
        setOnClickFunction(false);
      }
    });
  }, [data, onClickFunction, dummySetter]);

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

export default VisualizationContainer;
