import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { BubbleSort } from './algorithms/BubbleSort';
import { InsertionSort } from './algorithms/InsertionSort';
import { HeapSort } from './algorithms/HeapSort';
import { QuickSort } from './algorithms/QuickSort';
import { SelectionSort } from './algorithms/SelectionSort';
import VisualizationContainer from './VisualizationContainer';
import { seedDataRectangles } from './algorithms/utils';
import Typography from '@mui/material/Typography';

const Visualization = ({ algorithmName }) => {
  const [data, setData] = useState(seedDataRectangles());
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [newElement, setNewElement] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // this randomizes data
  const randomizeData = () => {
    setIsSorted(false);
    setData(seedDataRectangles());
  };

  const addElement = () => {
    const newEl = parseInt(newElement);
    if (data.length === 10) {
      setErrorMessage('Arrays maximum size is 10');
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
      return;
    }
    if (!newEl || newEl > 200 || newEl < 20) {
      setErrorMessage('Invalid input, insert value between 20 and 200');
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
    } else {
      setIsSorted(false);
      const newArr = [];
      const newData = [];
      for (let i = 0; i < data.length; i++) {
        newArr.push(data[i].height);
      }
      for (let i = 0; i < newArr.length; i++) {
        newData.push({
          id: `r${i}`,
          height: newArr[i],
          rectId: `rId${i}`,
        });
      }
      newData.push({
        id: `r${newData.length}`,
        height: newEl,
        rectId: `rId${newData.length}`,
      });
      setData(newData);
    }
  };

  const runAlgorithm = async () => {
    console.log(data);
    if (data.length !== 10) {
      setErrorMessage('Invalid input, array should contain exactly 10 element');
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
      return;
    }
    switch (algorithmName) {
      case 'bubble-sort': {
        await BubbleSort(data, setIsSorting, setIsSorted);
        break;
      }
      case 'insertion-sort': {
        await InsertionSort(data, setIsSorting, setIsSorted);
        break;
      }
      case 'heap-sort': {
        await HeapSort(data, setIsSorting, setIsSorted);
        break;
      }
      case 'quick-sort': {
        await QuickSort(data, setIsSorting, setIsSorted);
        break;
      }
      case 'selection-sort': {
        await SelectionSort(data, setIsSorting, setIsSorted);
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
      rowSpacing={2}
      columnSpacing={0}
    >
      <Grid item xs={12}>
        <VisualizationContainer data={data} setIsSorting={setIsSorting} />
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          columnSpacing={1}
          sx={{ borderBottom: 2, borderColor: 'divider' }}
        >
          <Grid item>
            <TextField
              style={{
                width: '350px',
              }}
              label="Initial array values"
              id="outlined-size-small"
              value={data.map(d => d.height)}
              disabled={true}
              size="small"
            />
          </Grid>
          <Grid item>
            <TextField
              style={{
                width: '125px',
                marginLeft: '8px',
              }}
              type="number"
              label="New element"
              id="outlined-size-small"
              value={newElement}
              disabled={isSorting}
              size="small"
              onChange={e => {
                setNewElement(e.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <Button
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                fontSize: '12px',
                marginTop: '3px',
                marginLeft: '8px',
              }}
              disabled={isSorting}
              variant="contained"
              onClick={() => {
                addElement();
              }}
            >
              Add element
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                fontSize: '12px',
                marginTop: '3px',
                marginLeft: '8px',
              }}
              disabled={isSorting}
              variant="contained"
              onClick={() => {
                setData(data.slice(0, data.length - 1));
              }}
            >
              Pop element
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                fontSize: '12px',
                marginTop: '3px',
                marginLeft: '8px',
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
                marginTop: '3px',
                marginLeft: '8px',
              }}
              disabled={isSorting || isSorted}
              variant="contained"
              onClick={() => runAlgorithm()}
            >
              Start sorting
            </Button>
          </Grid>
          <Grid
            item
            style={{
              color: '#ff0000',
              fontSize: '12px',
              marginTop: '8px',
              marginLeft: '20px',
              marginBottom: '46px'
            }}
          >
            <Typography align="center">{errorMessage}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Visualization;
