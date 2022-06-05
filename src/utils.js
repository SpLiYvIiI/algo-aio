const seedDataRectangles = () => {
  const seedData = []
  for(let i = 0; i < 10; i++){
    seedData.push({
      id: `r${i}`,
      height: randomNumberOneToX(200)
    })
  }
  return seedData
}


const delay = (delayInms) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

const randomNumberOneToX = (x) => {
  return Math.round(Math.random() * x)
}



export {
  seedDataRectangles,
  delay,
  randomNumberOneToX,
}