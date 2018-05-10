// const array = [6, 4, 5, 2, 1, 3];

// what I know
// two functions
// inline swaps
// how to place the array for the tree set up

// array[0] becomes the root node
// array [1] goes to the left
// array [2] goes to the right
// array [3] becomes the array[1] left child
// array[4] becomes the array[1] right child
// array[5] becomes array[2] left child

// always goes to the left when adding new array
// the root is always the first  number
// [1] and [2] become the childen of array[0]

//  maxHeap
//  parent has to be bigger (get biggest number)
//  start at the last parent. array[2] (how do you find last parent)
//  check left child first, then right
//  if child is bigger than parent then switch
//  if both are larger swap the bigger one???
// refcurison this on all parents have no children smaller
// once the largest number is at the top we know its the largest number so we can remove it fomr the tree and place it in the sorted array knowing it goes at the last index.







// don't
// -------------------------

// minHeap
// start at array[0] check left(array[1]) if larger swap
  // if not check thr rigth array[2]
  // if yes swap
  // if no check array[3]
// recurcion this
