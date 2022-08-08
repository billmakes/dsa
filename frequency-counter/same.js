// Write a function called same, which accepts two arrays.
// The function should return true if every value in the
// array has it's corresponding value squared in the second
// array. The frequency of values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// if 1 appears twice in the first array, 1^2 (1) must appear twice in the second array.  


// O(n^2) - indexOf loops through the array inside of the for loop
function sameNaive(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1)
  }
  return true
}


const test1 = [[1, 2, 3], [4, 1, 9]]
const test2 = [[1, 2, 3], [1, 9]]
const test3 = [[1, 2, 1], [4, 4, 1]]

// console.log(sameNaive(...test1))
// console.log(sameNaive(...test2))
// console.log(sameNaive(...test3))

// O(n) - linear, no stacking loops
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  let counter1 = {}
  let counter2 = {}
  for (let val of arr1) {
    counter1[val] = ++counter1[val] || 1
  }
  for (let val of arr2) {
    counter2[val] = ++counter2[val] || 1
  }
  for (let key in counter1) {
    // if arr1 element^2 does not exist in arr2 return false
    if (!(key ** 2 in counter2)) {
      return false
    }
    // if the frequency does not match return false 
    if (counter2[key ** 2] !== counter1[key]) {
      return false
    }
  }
  return true
}

console.log(same(...test1))
console.log(same(...test2))
console.log(same(...test3))
