import * as d3 from 'd3';
import { delay } from '../../../../common/utils';

const colorizeVertex = async (
  vertexNumber,
  durationMs = 500,
  delayMs = 600,
  color = 'red'
) => {
  const vertex = d3.select(`#v${vertexNumber}`);
  vertex
    .transition()
    .duration(durationMs)
    .ease(d3.easeLinear)
    .style('fill', color);
  await delay(delayMs);
};

const colorizeEdge = async (
  edgeText,
  durationMs = 500,
  delayMs = 600,
  color = 'green'
) => {
  const edge = d3.select(`#${edgeText}`);
  edge
    .transition()
    .duration(durationMs)
    .ease(d3.easeLinear)
    .style('stroke', color);
  await delay(delayMs);
};
export { colorizeVertex, colorizeEdge };
