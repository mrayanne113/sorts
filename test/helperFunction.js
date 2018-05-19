const min = -500;
const max = 500;
let largeArray = [];

const helper = (highest) => {
  for (let i = 0; i < highest; i++) {
    let number = Math.floor(Math.random() * (max - min)) + min;

    largeArray.push(number);
  }
  return largeArray;
};

export default helper;
