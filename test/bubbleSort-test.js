import { assert } from 'chai';
import bubbleSort from '../lib/bubbleSort.js';

describe('bubbleSort', () => {
  it('should sort numbers in lower to higher order ', () => {
    let array = [11, 3];
    let actual = bubbleSort(array);
    let expected = [3, 11];

    assert.deepEqual(actual, expected);
  });

  it('should sort letters in order', () => {
    let array = ['f', 'r', 'x', 'a', 'w'];
    let actual = bubbleSort(array);
    let expected = ['a', 'f', 'r', 'w', 'x'];

    assert.deepEqual(actual, expected);
  });

  it('should take small array', () => {
    let array = [3, 5, 31, 2, 11];
    let actual = bubbleSort(array);
    let expected = [2, 3, 5, 11, 31];

    assert.deepEqual(actual, expected);
  });

  it('should sort a mudium array of 7,000 numbers', () => {
    const largeArray = [];
    const min = -100;
    const max = 100;

    for (let i = 0; i < 7000; i++) {
      let number = Math.floor(Math.random() * (max - min)) + min;

      largeArray.push(number);
    }

    const actual = bubbleSort(largeArray);
    const expected = largeArray.sort();

    assert.deepEqual(actual, expected);
  });


  it('should sort a large array of 15,000 numbers', () => {
    const largeArray = [];
    const min = -500;
    const max = 500;

    for (let i = 0; i < 15000; i++) {
      let number = Math.floor(Math.random() * (max - min)) + min;

      largeArray.push(number);
    }

    const sortedLargeArray = bubbleSort(largeArray);
    const actual = bubbleSort(largeArray);
    const expected = sortedLargeArray;

    assert.deepEqual(actual, expected);
  });

});