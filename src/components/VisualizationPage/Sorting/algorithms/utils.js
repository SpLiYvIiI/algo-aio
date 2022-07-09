import * as d3 from 'd3';

const getTranslateValues = id => {
  const string = document.getElementById(id).getAttribute('transform');

  return string
    .substring(string.indexOf('(') + 1, string.indexOf(')'))
    .split(',');
};

const delay = delayInms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
};

const seedDataRectangles = () => {
  const seedData = [];
  for (let i = 0; i < 10; i++) {
    const rand = randomNumber20ToX(200);
    seedData.push({
      id: `r${i}`,
      height: rand,
      x: i * 70 + (window.innerWidth - 700) / 2,
      rectId: `rId${i}`,
    });
  }
  return seedData;
};

const swapTwoRectanglesAnimation = async (
  firstElement,
  secondElement,
  durationMs = 500,
  delayMs = 600
) => {
  const firstRectG = d3.select(`#${firstElement.id}`);
  const secondRectG = d3.select(`#${secondElement.id}`);
  const firstCoord = getTranslateValues(firstElement.id);
  const secondCoord = getTranslateValues(secondElement.id);
  firstRectG
    .transition()
    .duration(durationMs)
    .ease(d3.easeLinear)
    .attr('transform', `translate(${secondCoord[0]},${firstCoord[1]})`);
  secondRectG
    .transition()
    .duration(durationMs)
    .ease(d3.easeLinear)
    .attr('transform', `translate(${firstCoord[0]},${secondCoord[1]})`);
  await delay(delayMs);
};

const colorizeSingleRectangle = async (
  element,
  durationMs = 0,
  delayMs = 0,
  color = 'red'
) => {
  const rect = d3.select(`#${element.rectId}`);
  rect.transition().duration(durationMs).ease(d3.easeLinear).style('fill', color);
  await delay(delayMs);
};

const colorizeTwoRectangles = async (
  firstElement,
  secondElement,
  durationMs = 200,
  delayMs = 300,
  firstColor = 'red',
  secondColor = 'red'
) => {
  const firstRect = d3.select(`#${firstElement.rectId}`);
  const secondRect = d3.select(`#${secondElement.rectId}`);
  firstRect.transition().duration(200).ease(d3.easeLinear).style('fill', 'red');
  secondRect
    .transition()
    .duration(durationMs)
    .ease(d3.easeLinear)
    .style('fill', 'red');

  await delay(delayMs);
};

const randomNumber20ToX = x => {
  return Math.round(Math.random() * (x - 20) + 20);
};

export {
  swapTwoRectanglesAnimation,
  colorizeTwoRectangles,
  colorizeSingleRectangle,
  seedDataRectangles,
  delay,
};
