const seedDataRectangles = () => {
  const seedData = [];
  for (let i = 0; i < 10; i++) {
    seedData.push({
      id: `r${i}`,
      height: randomNumber20ToX(200),
    });
  }
  return seedData;
};

const delay = delayInms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
};

const randomNumber20ToX = x => {
  return Math.round(Math.random() * (x - 20) + 20);
};

export { seedDataRectangles, delay, randomNumber20ToX };
