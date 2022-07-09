import {
  colorizeSingleRectangle,
  colorizeTwoRectangles,
  swapTwoRectanglesAnimation,
} from './utils';

export const InsertionSort = async (data, setIsSorting, setIsSorted) => {
  setIsSorting(true);
  const temp = data;

  await colorizeSingleRectangle(temp[0], 200, 300, 'yellow');

  for (let i = 1; i < temp.length; i++) {
    const key = temp[i];
    let j = i - 1;

    while (j >= 0 && temp[j].height > key.height) {
      const firstElement = temp[j];
      const secondElement = temp[j + 1];
      const tmp = temp[j + 1];

      await colorizeTwoRectangles(
        firstElement,
        secondElement,
        200,
        300,
        'red',
        'red'
      );

      temp[j + 1] = temp[j];
      temp[j] = tmp;
      j = j - 1;

      await swapTwoRectanglesAnimation(firstElement, secondElement, 500, 600);

      await colorizeSingleRectangle(firstElement, 0, 0, 'yellow');
    }
    temp[j + 1] = key;

    await colorizeSingleRectangle(temp[j + 1], 0, 0, 'yellow');
  }
  setIsSorting(false);
  setIsSorted(true);
};
