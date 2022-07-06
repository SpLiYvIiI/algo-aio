import * as d3 from 'd3';
import { delay } from '../../../../common/utils';

export const InsertionSort = async (data, setIsSorting, setIsSorted) => {
  setIsSorting(true);
  const temp = data;

  d3.select(`#${temp[0].id}`)
    .transition()
    .duration(200)
    .style('fill', 'yellow');
  await delay(300);

  for (let i = 1; i < temp.length; i++) {
    const key = temp[i];
    let j = i - 1;

    while (j >= 0 && temp[j].height > key.height) {
      const firstId = temp[j].id;
      const secondId = temp[j + 1].id;
      const tmp = temp[j + 1];
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

      temp[j + 1] = temp[j];
      temp[j] = tmp;
      j = j - 1;

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

      firstRect.style('fill', 'yellow');
    }
    temp[j + 1] = key;
    d3.select(`#${temp[j + 1].id}`).style('fill', 'yellow');
  }
  setIsSorting(false);
  setIsSorted(true);
};
