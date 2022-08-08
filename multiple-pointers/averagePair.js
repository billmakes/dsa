// Write a function called averagePair. Given a sorted array of integers and a target
// average, determine if there is a pair of values in the array where the average
// of the pair equals the target average. There may be more than one pair that 
// matches the average target.

// multiple pointers O(n)
function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let currentAvg = (arr[left] + arr[right]) / 2;
    if (currentAvg === avg) {
      return true;
    } else if (currentAvg > avg) {
      right--;

    } else {
      left++;
    }
  }
  return false;
}

let tests = [
  [[1, 2, 3], 2.5], // true
  [[1, 3, 3, 5, 6, 7, 10, 12, 19], 8], // true
  [[-1, 0, 3, 4, 5, 6], 4.1], // false
  [[], 4], // false
]

tests.forEach(test => console.log(averagePair(...test)))
