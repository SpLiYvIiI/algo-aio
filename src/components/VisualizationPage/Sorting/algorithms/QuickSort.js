import { swapTwoRectanglesAnimation } from './utils';

const partition = async (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j].height < pivot.height) {
      i++;
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      await swapTwoRectanglesAnimation(arr[i], arr[j], 300, 600);
    }
  }
  const tmp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = tmp;

  await swapTwoRectanglesAnimation(arr[i + 1], arr[high], 100, 200);

  return i + 1;
};

const QuickSortAlg = async (arr, low, high) => {
  if (low < high) {
    const pi = await partition(arr, low, high);

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
