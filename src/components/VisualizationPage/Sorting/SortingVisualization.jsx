import React, { useState } from 'react';
import { seedDataRectangles, randomNumber20ToX } from '../../../common/utils';
import { Button, Grid, TextField } from '@mui/material';
import { BubbleSort } from './algorithms/BubbleSort';
import { InsertionSort } from './algorithms/InsertionSort';
import { HeapSort } from './algorithms/HeapSort';
import { QuickSort } from './algorithms/QuickSort';
import { SelectionSort } from './algorithms/SelectionSort';
import SortingVisualizationContainer from './SortingVisualizationContainer';

const SortingVisualization = ({ algorithmName }) => {
  const [data, setData] = useState(seedDataRectangles());
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [userInputValue, setUserInputValue] = useState(data.map(d => d.height));

  // this randomizes data
  const randomizeData = () => {
    setIsSorted(false);
    const newRadius = data.map(obj => {
      obj.height = randomNumber20ToX(200);
      return obj;
    });
    setData(newRadius);
    setUserInputValue(data.map(d => d.height));
  };

  const runAlgorithm = () => {
    switch (algorithmName) {
      case 'bubble-sort': {
        BubbleSort(data, setIsSorting, setIsSorted);
        break;
      }
      case 'insertion-sort': {
        InsertionSort(data, setIsSorting, setIsSorted);
        break;
      }
      case 'heap-sort': {
        HeapSort(data, setIsSorting, setIsSorted);
        break;
      }
      case 'quick-sort': {
        QuickSort(data, setIsSorting, setIsSorted);
        break;
      }
      case 'selection-sort': {
        SelectionSort(data, setIsSorting, setIsSorted);
        break;
      }
      default:
        break;
    }
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      rowSpacing={1}
      columnSpacing={0}
    >
      <Grid item xs={12}>
        <SortingVisualizationContainer
          data={data}
          setIsSorting={setIsSorting}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          columnSpacing={0}
          sx={{ borderBottom: 2, borderColor: 'divider' }}
        >
          <Grid item>
            <TextField
              style={{
                width: '350px',
              }}
              label="Initial array values"
              id="outlined-size-small"
              value={userInputValue}
              disabled={isSorting}
              size="small"
              onChange={e => setUserInputValue(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                fontSize: '12px',
                marginTop: '5px',
                marginLeft: '10px',
              }}
              disabled={isSorting}
              variant="contained"
              onClick={() => randomizeData()}
            >
              Randomize array
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                fontSize: '12px',
                marginTop: '5px',
                marginLeft: '10px',
              }}
              disabled={isSorting || isSorted}
              variant="contained"
              onClick={() => runAlgorithm()}
            >
              Start sorting
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SortingVisualization;