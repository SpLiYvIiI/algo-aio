import * as d3 from 'd3';
import { delay } from '../../../../common/utils';

export const QuickSort = (data, setIsSorting, setIsSorted) => {
  const partition = async (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      if (arr[j].height < pivot.height) {
        i++;
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;

        const firstId = arr[i].id;
        const secondId = arr[j].id;
        const firstRect = d3.select(`#${firstId}`);
        const secondRect = d3.select(`#${secondId}`);

        firstRect
          .transition()
          .duration(300)
          .ease(d3.easeLinear)
          .attr('x', document.getElementById(secondId).getAttribute('x'));
        secondRect
          .transition()
          .duration(300)
          .ease(d3.easeLinear)
          .attr('x', document.getElementById(firstId).getAttribute('x'));

        await delay(600);
      }
    }
    const tmp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = tmp;

    const firstId = arr[i + 1].id;
    const secondId = arr[high].id;
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

    return i + 1;
  };

  const QuickSortAlg = async (arr, low, high) => {
    if (low < high) {
      const pi = await partition(arr, low, high);

      await QuickSortAlg(arr, low, pi - 1);
      await QuickSortAlg(arr, pi + 1, high);
    }
  };

  setIsSorting(true);
  const temp = data;

  const low = 0;
  const high = temp.length - 1;

  QuickSortAlg(temp, low, high);

  setIsSorting(false);
  setIsSorted(true);
};
