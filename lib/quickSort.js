export default function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array.pop();
  let smallArr = [];
  let largeArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      smallArr.push(array[i]);
    } else {
      largeArr.push(array[i]);
    }
  }
  return [...quickSort(smallArr), pivot, ...quickSort(largeArr)];
}