const heapSort = (array) => {
  let sorted = [];

  heap1(array, sorted);

  return sorted;
};

const heap1 = (array, sorted) => {
  if (!array.length) {
    return sorted;
  }
  let parentNode = Math.floor((array.length - 2) / 2);

  for (let i = parentNode; i >= 0; i--) {
    findLargerValue(array, i);
  }
  let highestNum = array.shift();

  sorted.unshift(highestNum);

  return heap1(array, sorted);
};

const findLargerValue = (array, i) => {
  let leftChild = Math.floor((i * 2) + 1);
  let rightChild = Math.floor((i * 2) + 2);

  if (array[i] < array[leftChild]) {
    [array[i], array[leftChild]] = [array[leftChild], array[i]];
  }

  if (array[i] < array[rightChild]) {
    [array[i], array[rightChild]] = [array[rightChild], array[i]];
  }
};

module.exports = heapSort;
