import { colorizeEdge, colorizeVertex } from './utils';

export const BFS = async (nodes, edges, setIsTraversing) => {
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
  const que = [];
  const visited = [];
  visited.push(0);
  que.push(0);
  while (que.length !== 0) {
    const u = que.shift();
    await colorizeVertex(u, 300, 400, 'red');
    for (let i = 0; i < adjList[u].length; i++) {
      const e = adjList[u][i][1];
      const v = adjList[u][i][0];

      if (visited.indexOf(v) !== -1) {
        continue;
      } else {
        await colorizeEdge(e, 300, 400, 'orange');
        visited.push(v);
        que.push(v);
      }
    }
    await colorizeVertex(u, 300, 400, 'yellow');
  }
  setIsTraversing(false);
};
