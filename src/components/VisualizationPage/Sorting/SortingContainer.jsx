import React, { useState } from 'react';
import { delay, seedDataRectangles } from '../../../common/utils';
import * as d3 from 'd3';
import SortingVisualizationContainer from './SortingVisualizationContainer';
import { Button, Grid } from '@mui/material';
import Navigation from '../../Navigation';
import OverviewAndQuizz from '../../OverviewAndQuizz';

const SortingContainer = () => {
  const [data, setData] = useState(seedDataRectangles());
  const [isSorting, setIsSorting] = useState(false);

  // this randomizes data
  const changeInitData = () => {
    const newRadius = data.map(obj => {
      const racxa = Math.round(Math.random() * 200);
      obj.height = racxa;
      return obj;
    });
    setData(newRadius);
  };

  // And here goes our sorting algorithms
  const bubbleSort = async () => {
    setIsSorting(true);
    const temp = data;
    for (let i = 0; i < temp.length; i++) {
      for (let j = 0; j < temp.length - i - 1; j++) {
        const firstId = temp[j].id;
        const secondId = temp[j + 1].id;
        const firstRect = d3.select(`#${firstId}`);
        const secondRect = d3.select(`#${secondId}`);

        firstRect
          .transition()
          .duration(200)
          .ease(d3.easeLinear)
          .style('fill', 'red');
        secondRect
          .transition()
          .duration(200)
          .ease(d3.easeLinear)
          .style('fill', 'red');
        await delay(300);

        if (temp[j].height > temp[j + 1].height) {
          const tmp = temp[j];
          temp[j] = temp[j + 1];
          temp[j + 1] = tmp;
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
        firstRect.style('fill', 'black');
        secondRect.style('fill', 'black');
      }
      d3.select(`#${temp[temp.length - i - 1].id}`).style('fill', 'yellow');
    }
  };

  return (
    <div>
      <Navigation />
      <Grid container rowSpacing={1} columnSpacing={0} paddingTop="10px">
        <Grid
          item
          xs={12}
          style={{
            borderStyle: 'solid',
          }}
        >
          <SortingVisualizationContainer
            data={data}
            setIsSorting={setIsSorting}
          />
        </Grid>
        <Grid
          item
          xs={12}
          paddingBottom="5px"
          sx={{ borderBottom: 2, borderColor: 'divider' }}
        >
          <Button
            style={{
              backgroundColor: '#ffffff',
              color: '#000000',
              fontSize: '12px',
            }}
            disabled={isSorting}
            variant="contained"
            onClick={() => changeInitData()}
          >
            Randomize array
          </Button>
          <Button
            style={{
              backgroundColor: '#ffffff',
              color: '#000000',
              fontSize: '12px',
              marginLeft: '10px',
            }}
            disabled={isSorting}
            variant="contained"
            onClick={() => bubbleSort()}
          >
            Start sorting
          </Button>
        </Grid>
        <OverviewAndQuizz />
      </Grid>
    </div>
  );
};

export default SortingContainer;
