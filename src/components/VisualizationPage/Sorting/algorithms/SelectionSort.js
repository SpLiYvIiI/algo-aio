import { swapTwoRectanglesAnimation } from './utils';

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

      await swapTwoRectanglesAnimation(temp[i], temp[k], 500, 600);
    }
  }

  setIsSorting(false);
  setIsSorted(true);
};
