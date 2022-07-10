import {
  colorizeSingleRectangle,
  colorizeTwoRectangles,
  swapTwoRectanglesAnimation,
} from './utils';

export const BubbleSort = async (data, setIsSorting, setIsSorted) => {
  setIsSorting(true);
  const temp = data;
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp.length - i - 1; j++) {
      const firstElement = temp[j];
      const secondElement = temp[j + 1];

      await colorizeTwoRectangles(
        firstElement,
        secondElement,
        200,
        300,
        'red',
        'red'
      );

      if (temp[j].height > temp[j + 1].height) {
        const tmp = temp[j];
        temp[j] = temp[j + 1];
        temp[j + 1] = tmp;

        await swapTwoRectanglesAnimation(firstElement, secondElement, 500, 600);
      }
      await colorizeTwoRectangles(
        firstElement,
        secondElement,
        0,
        0,
        'black',
        'black'
      );
    }
    await colorizeSingleRectangle(temp[temp.length - i - 1], 0, 0, 'yellow');
  }
  setIsSorting(false);
  setIsSorted(true);
};
