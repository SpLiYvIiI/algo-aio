import { swapTwoRectanglesAnimation } from './utils';

export const HeapSort = async (data, setIsSorting, setIsSorted) => {
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

      await swapTwoRectanglesAnimation(arr[i], arr[largest], 100, 200);

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

      await swapTwoRectanglesAnimation(arr[0], arr[i], 100, 200);

      await Heapify(arr, i, 0);
    }
  };
  setIsSorting(true);
  const temp = data;

  await HeapSortAlg(temp);

  setIsSorting(false);
  setIsSorted(true);
};
