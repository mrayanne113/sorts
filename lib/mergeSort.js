export default function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }


  let middle = Math.floor(array.length / 2);
  const arr1 = array.slice(0, middle);
  const arr2 = array.slice(middle);

  return mergeTwo(mergeSort(arr1), mergeSort(arr2));
}

function mergeTwo(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  return [...merged, ...arr1.slice(i), ...arr2.slice(j)];
}
