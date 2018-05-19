import { assert } from 'chai';
import heapSort from '../lib/heapSort.js';

describe('Heap', function () {
  it('should sort a small number array', () => {
    const array = [11, 0, 4, 4];
    const actual = heapSort(array);
    const expected = [0, 4, 4, 11];

    assert.deepEqual(actual, expected);
  });

  it('should sort an small array of numbers from smallest to largest', () => {
    const array = [20, 13, 9, 8, 6, 3, 7, 5, 2, 10];
    const actual = heapSort(array);
    const expected = [2, 3, 5, 6, 7, 8, 9, 10, 13, 20];

    assert.deepEqual(actual, expected);
  });

  it('should sort letters in order', () => {
    let array = ['f', 'r', 'x', 'a', 'w'];
    let actual = heapSort(array);
    let expected = ['a', 'f', 'r', 'w', 'x'];

    assert.deepEqual(actual, expected);
  });

  it('should sort an array of 150 numbers', () => {
    const largeArray = [];
    const min = -500;
    const max = 500;

    for (let i = 0; i < 150; i++) {
      let number = Math.floor(Math.random() * (max - min)) + min;

      largeArray.push(number);
    }
    heapSort(largeArray);
    const actual = heapSort(largeArray);
    const expected = largeArray;

    assert.deepEqual(actual, expected);
  });

  it('should sort an array of 1,500 numbers', () => {
    const largeArray = [];
    const min = -500;
    const max = 500;

    for (let i = 0; i < 1500; i++) {
      let number = Math.floor(Math.random() * (max - min)) + min;

      largeArray.push(number);
    }
    heapSort(largeArray);
    const actual = heapSort(largeArray);
    const expected = largeArray;

    assert.deepEqual(actual, expected);
  });

  it('should sort an array of 3,000 numbers', () => {
    const largeArray = [];
    const min = -500;
    const max = 500;

    for (let i = 0; i < 3000; i++) {
      let number = Math.floor(Math.random() * (max - min)) + min;

      largeArray.push(number);
    }
    heapSort(largeArray);
    const actual = heapSort(largeArray);
    const expected = largeArray;

    assert.deepEqual(actual, expected);
  });

  it('should sort an array of 5,000 numbers', () => {
    const largeArray = [];
    const min = -500;
    const max = 500;

    for (let i = 0; i < 5000; i++) {
      let number = Math.floor(Math.random() * (max - min)) + min;

      largeArray.push(number);
    }
    heapSort(largeArray);
    const actual = heapSort(largeArray);
    const expected = largeArray;

    assert.deepEqual(actual, expected);
  });

  it('should sort an array of 7,000 numbers', () => {
    const largeArray = [];
    const min = -500;
    const max = 500;

    for (let i = 0; i < 7000; i++) {
      let number = Math.floor(Math.random() * (max - min)) + min;

      largeArray.push(number);
    }
    heapSort(largeArray);
    const actual = heapSort(largeArray);
    const expected = largeArray;

    assert.deepEqual(actual, expected);
  });

  it('should sort an array of 7,300 numbers', () => {
    const largeArray = [];
    const min = -500;
    const max = 500;

    for (let i = 0; i < 7300; i++) {
      let number = Math.floor(Math.random() * (max - min)) + min;

      largeArray.push(number);
    }
    heapSort(largeArray);
    const actual = heapSort(largeArray);
    const expected = largeArray;

    assert.deepEqual(actual, expected);
  });
});