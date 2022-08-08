// Given a sorted array of integers, write a function
// called search, that accepts a value and returns the
// index where the value passed to the function is
// located. If the value is not found, return -1

// implement indexOf

// search([1,2,3,4,5,6], 4) // 3
// search([1,2,3,4,5,6], 6) // 5
// search([1,2,3,4,5,6], 11) // -1

//O(Log(N))
function search(arr, num) {
  let min = 0
  let max = arr.length - 1
  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    let current = arr[middle]

    if (current < num) {
      min = middle + 1
    }
    else if (current > num) {
      max = middle - 1
    }
    else {
      return middle
    }
  }
  return -1
}

const tests = [
  [[1, 2, 3, 4, 5, 6], 4], // 3
  [[1, 2, 3, 4, 5, 6], 6], // 5
  [[1, 2, 3, 4, 5, 6], 11], // -1
]

tests.forEach(test => console.log(search(...test)))
