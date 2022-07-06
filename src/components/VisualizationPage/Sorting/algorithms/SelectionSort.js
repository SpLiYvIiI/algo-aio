import * as d3 from 'd3';
import { delay } from '../../../../common/utils';

export const SelectionSort = async (data, setIsSorting, setIsSorted) => {
  setIsSorting(true);
  const temp = data;
  let k = 0;
  for (let i = 0; i < temp.length; i++) {
    k = i;
    for (let j = i + 1; j < temp.length; j++) {
      if (temp[k].height > temp[j].height) {
        k = j;
      }
    }

    if (k !== i) {
      const tmp = temp[i];
      temp[i] = temp[k];
      temp[k] = tmp;

      const firstId = temp[i].id;
      const secondId = temp[k].id;
      const firstRect = d3.select(`#${firstId}`);
      const secondRect = d3.select(`#${secondId}`);

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
  }

  setIsSorting(false);
  setIsSorted(true);
};
