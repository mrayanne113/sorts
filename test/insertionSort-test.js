import { assert } from 'chai';
import insertionSort from '../lib/insertionSort.js';

describe('insertionSort', () => {
  it('should be a function', () => {
    assert.isFunction(insertionSort);
  });

  it('should sort numbers in lower to higher order ', () => {
    let array = [23, 12];
    let actual = insertionSort([...array]); // better way
    let expected = [12, 23];

    assert.deepEqual(actual, expected);
  });

  it('should sort letters in order', () => {
    let array = ['s', 'w', 'g', 'a', 'v'];
    let actual = insertionSort(array);
    let expected = ['a', 'g', 's', 'v', 'w'];

    assert.deepEqual(actual, expected);
  });

  it('should take small array', () => {
    let array = [8, 23, 1, 88, -1];
    let actual = insertionSort(array);
    let expected = [-1, 1, 8, 23, 88];

    assert.deepEqual(actual, expected);
  });

  it('should sort a mudium array of 14,500 numbers', () => {
    const largeArray = [];
    const min = -100;
    const max = 100;

    for (let i = 0; i < 14500; i++) {
      let number = Math.floor(Math.random() * (max - min)) + min;

      largeArray.push(number);
    }

    const actual = insertionSort(largeArray);
    const expected = largeArray.sort();

    assert.deepEqual(actual, expected);
  });


  it('should sort a large array of 28,500 numbers', () => {
    const largeArray = [];
    const min = -500;
    const max = 500;

    for (let i = 0; i < 28500; i++) {
      let number = Math.floor(Math.random() * (max - min)) + min;

      largeArray.push(number);
    }

    const sortedLargeArray = insertionSort(largeArray);
    const actual = insertionSort(largeArray);
    const expected = largeArray.sort();

    assert.deepEqual(actual, expected);
  });

});