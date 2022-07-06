import * as d3 from 'd3';
import { delay } from '../../../../common/utils';

export const HeapSort = (data, setIsSorting, setIsSorted) => {
  const Heapify = async (arr, n, i) => {
    let largest = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;

    if (l < n && arr[l].height > arr[largest].height) largest = l;

    if (r < n && arr[r].height > arr[largest].height) largest = r;

    if (largest !== i) {
      const tmp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = tmp;

      const firstId = arr[i].id;
      const secondId = arr[largest].id;
      const firstRect = d3.select(`#${firstId}`);
      const secondRect = d3.select(`#${secondId}`);

      firstRect
        .transition()
        .duration(100)
        .ease(d3.easeLinear)
        .attr('x', document.getElementById(secondId).getAttribute('x'));
      secondRect
        .transition()
        .duration(100)
        .ease(d3.easeLinear)
        .attr('x', document.getElementById(firstId).getAttribute('x'));

      await delay(200);

      await Heapify(arr, n, largest);
    }
  };

  const HeapSortAlg = async arr => {
    const n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await Heapify(arr, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
      const tmp = arr[0];
      arr[0] = arr[i];
      arr[i] = tmp;

      const firstId = arr[0].id;
      const secondId = arr[i].id;
      const firstRect = d3.select(`#${firstId}`);
      const secondRect = d3.select(`#${secondId}`);

      firstRect
        .transition()
        .duration(100)
        .ease(d3.easeLinear)
        .attr('x', document.getElementById(secondId).getAttribute('x'));
      secondRect
        .transition()
        .duration(100)
        .ease(d3.easeLinear)
        .attr('x', document.getElementById(firstId).getAttribute('x'));
      await delay(200);
      await Heapify(arr, i, 0);
    }
  };
  setIsSorting(true);
  const temp = data;

  HeapSortAlg(temp);

  setIsSorting(false);
  setIsSorted(true);
};
