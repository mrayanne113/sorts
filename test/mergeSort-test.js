import { assert } from 'chai';
import mergeSort from '../lib/mergeSort.js';

describe('mergeSort', () => {
  it('should be a function', () => {
    assert.isFunction(mergeSort);
  });

  it('should sort numbers in lower to higher order ', () => {
    let array = [23, 12];
    let actual = mergeSort(array);
    let expected = [12, 23];

    assert.deepEqual(actual, expected);
  });

  it('should sort letters in order', () => {
    let array = ['s', 'w', 'g', 'a', 'v'];
    let actual = mergeSort(array);
    let expected = ['a', 'g', 's', 'v', 'w'];

    assert.deepEqual(actual, expected);
  });

  it('should take small array', () => {
    let array = [8, 23, 1, 88, -1];
    let actual = mergeSort(array);
    let expected = [-1, 1, 8, 23, 88];

    assert.deepEqual(actual, expected);
  });

  it('should sort a mudium array of 14,500 numbers', () => {
    const largeArray = [];
    const min = -100;
    const max = 100;

    for (let i = 0; i < 1500; i++) {
      let number = Math.floor(Math.random() * (max - min)) + min;

      largeArray.push(number);
    }

    let sortedLargeArray = mergeSort(largeArray);

    for (let i = 1; i < sortedLargeArray.length; i++) {
      assert.isAtLeast(sortedLargeArray[i], sortedLargeArray[i - 1]);
    }
  });


  it('should sort a large array of 15000 numbers', () => {
    const largeArray = [];
    const min = -500;
    const max = 500;

    for (let i = 0; i < 15000; i++) {
      let number = Math.floor(Math.random() * (max - min)) + min;

      largeArray.push(number);
    }

    let sortedLargeArray = mergeSort(largeArray);

    for (let i = 1; i < sortedLargeArray.length; i++) {
      assert.isAtLeast(sortedLargeArray[i], sortedLargeArray[i - 1]);
    }
  });

});
