export default function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const temp = array[i];
    let j;
    
    for (j = i - 1; array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;

  }
  return array;
}
