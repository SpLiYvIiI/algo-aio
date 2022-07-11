import { colorizeEdge, colorizeVertex } from './utils';

export const DFS = async (nodes, edges, setIsTraversing) => {
  const adjList = [];
  for (let i = 0; i < nodes.length; i++) adjList.push([]);
  for (let i = 0; i < edges.length; i++) {
    const source = edges[i].source;
    const target = edges[i].target;
    const edgeId = edges[i].id;
    adjList[source].push([target, edgeId]);
    adjList[target].push([source, edgeId]);
  }
  setIsTraversing(true);
  const visited = [];

  const dfs = async (adjList, u) => {
    await colorizeVertex(u, 300, 400, 'red');
    visited.push(u);

    for (let j = 0; j < adjList[u].length; j++) {
      const e = adjList[u][j][1];
      const v = adjList[u][j][0];
      if (visited.indexOf(v) === -1) {
        await colorizeEdge(e, 300, 400, 'orange');
        await dfs(adjList, v);
        await colorizeEdge(e, 300, 400, 'yellow');
      }
    }
    await colorizeVertex(u, 300, 400, 'yellow');
  };

  await dfs(adjList, 0);
  setIsTraversing(false);
};
