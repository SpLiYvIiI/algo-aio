import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import VisualizationContainer from './VisualizationContainer';
import Typography from '@mui/material/Typography';
import { BFS } from './algorithms/BFS';
import { DFS } from './algorithms/DFS';

const Visualization = ({ algorithmName }) => {
  const [data, setData] = useState({
    nodes: [],
    edges: [],
  });
  const [onClickFunction, setOnClickFunction] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [newVertexSource, setNewVertexSource] = useState(null);
  const [targetVertexSource, setTargetVertexSource] = useState(null);
  const [dummySetter, setDummySetter] = useState(true);
  const [isTraversing, setIsTraversing] = useState(false);

  const addVertex = (x, y) => {
    const n = data.nodes.length;
    const newVertex = { x, y, r: 20, label: `${n}`, id: `v${n}` };
    data.nodes.push(newVertex);
    setData(data);
  };

  const addEdge = event => {
    const n = data.nodes.length;
    const edgeN = data.edges.length;
    const newSVertex = parseInt(newVertexSource);
    const newTVertex = parseInt(targetVertexSource);
    if (
      newSVertex === undefined ||
      newTVertex === undefined ||
      newSVertex >= n ||
      newTVertex >= n
    ) {
      setErrorMessage('Invalid input');
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
      return;
    }
    data.edges.push({
      source: newSVertex,
      target: newTVertex,
      id: `e${edgeN}`,
    });
    setDummySetter(!dummySetter);
    setData(data);
  };

  const clearGraph = () => {
    setData({
      nodes: [],
      edges: [],
    });
  };

  const startTraversing = async () => {
    const edges = data.edges;
    const nodes = data.nodes;
    switch (algorithmName) {
      case 'breadth-first-search': {
        await BFS(nodes, edges, setIsTraversing);
        break;
      }
      case 'depth-first-search': {
        await DFS(nodes, edges, setIsTraversing);
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
        <VisualizationContainer
          data={data}
          onClickFunction={onClickFunction}
          setOnClickFunction={setOnClickFunction}
          addVertex={addVertex}
          dummySetter={dummySetter}
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
            <Button
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                fontSize: '12px',
                marginTop: '3px',
                marginLeft: '8px',
              }}
              variant="contained"
              disabled={(data.nodes.length >= 10 || isTraversing)}
              onClick={() => {
                setOnClickFunction(true);
              }}
            >
              Add vertex
            </Button>
          </Grid>
          <Grid item>
            <TextField
              style={{
                width: '125px',
                marginLeft: '8px',
              }}
              type="number"
              label="Source vertex"
              value={newVertexSource}
              disabled={isTraversing}
              id="outlined-size-small"
              size="small"
              onChange={event => {
                setNewVertexSource(event.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              style={{
                width: '125px',
                marginLeft: '8px',
              }}
              type="number"
              label="Target vertex"
              value={targetVertexSource}
              disabled={isTraversing}
              id="outlined-size-small"
              size="small"
              onChange={event => {
                setTargetVertexSource(event.target.value);
              }}
            />
          </Grid>
          <Grid>
            <Button
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                fontSize: '12px',
                marginTop: '3px',
                marginLeft: '8px',
              }}
              variant="contained"
              disabled={isTraversing}
              onClick={() => addEdge()}
            >
              Add edge
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
              disabled={isTraversing}
              variant="contained"
              onClick={() => clearGraph()}
            >
              Clear
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
              disabled={isTraversing}
              variant="contained"
              onClick={() => startTraversing()}
            >
              Start traversing
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
