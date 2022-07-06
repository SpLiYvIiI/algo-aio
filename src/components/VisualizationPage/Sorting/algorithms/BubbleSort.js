import * as d3 from 'd3';
import { delay } from '../../../../common/utils';

export const BubbleSort = async (data, setIsSorting, setIsSorted) => {
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
  setIsSorting(false);
  setIsSorted(true);
};
