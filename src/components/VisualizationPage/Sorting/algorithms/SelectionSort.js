import {
  colorizeSingleRectangle,
  colorizeTwoRectangles,
  swapTwoRectanglesAnimation,
} from './utils';

export const SelectionSort = async (data, setIsSorting, setIsSorted) => {
  setIsSorting(true);
  const temp = data;
  let k = 0;
  for (let i = 0; i < temp.length; i++) {
    k = i;
    await colorizeSingleRectangle(temp[k], 200, 300, 'green');
    for (let j = i + 1; j < temp.length; j++) {
      await colorizeSingleRectangle(temp[j], 200, 300, 'red');
      if (temp[k].height > temp[j].height) {
        await colorizeSingleRectangle(temp[k], 200, 300, 'black');
        k = j;
        await colorizeSingleRectangle(temp[k], 200, 300, 'green');
      } else {
        await colorizeSingleRectangle(temp[j], 200, 300, 'black');
      }
    }

    if (k !== i) {
      const tmp = temp[i];
      temp[i] = temp[k];
      temp[k] = tmp;

      await colorizeTwoRectangles(temp[i], temp[k], 200, 300, 'red', 'red');
      await swapTwoRectanglesAnimation(temp[i], temp[k], 500, 600);
      await colorizeTwoRectangles(temp[i], temp[k], 0, 0, 'black', 'black');
    }
    await colorizeSingleRectangle(temp[i], 0, 0, 'yellow');
  }

  setIsSorting(false);
  setIsSorted(true);
};
