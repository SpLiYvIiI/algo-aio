import {
  colorizeSingleRectangle,
  colorizeTwoRectangles,
  swapTwoRectanglesAnimation,
} from './utils';

const partition = async (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1;
  await colorizeSingleRectangle(pivot, 0, 0, 'green');
  for (let j = low; j <= high - 1; j++) {
    if (arr[j].height < pivot.height) {
      i++;
      await colorizeTwoRectangles(arr[i], arr[j], 200, 300, 'red', 'red');
      await swapTwoRectanglesAnimation(arr[i], arr[j], 500, 600);
      await colorizeTwoRectangles(arr[i], arr[j], 0, 0, 'black', 'black');
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }
  const tmp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = tmp;

  await colorizeTwoRectangles(arr[i + 1], arr[high], 200, 300, 'red', 'red');
  await swapTwoRectanglesAnimation(arr[i + 1], arr[high], 500, 600);
  await colorizeTwoRectangles(arr[i + 1], arr[high], 0, 0, 'black', 'black');

  return i + 1;
};

const QuickSortAlg = async (arr, low, high) => {
  if (low <= high) {
    const pi = await partition(arr, low, high);
    await colorizeSingleRectangle(arr[pi], 0, 0, 'yellow');

    await QuickSortAlg(arr, low, pi - 1);
    await QuickSortAlg(arr, pi + 1, high);
  }
};

export const QuickSort = async (data, setIsSorting, setIsSorted) => {
  setIsSorting(true);
  const temp = data;
  const low = 0;
  const high = temp.length - 1;

  await QuickSortAlg(temp, low, high);

  setIsSorting(false);
  setIsSorted(true);
};
