// Function called maxSubarraySum which accepts an array of integers
// and a number called n. The function should calculate the maximum sum of
// n consecutive elements in the array.


// maxSubArraySum([1,2,5,2,8,1,5],2) // 10
// maxSubArraySum([1,2,5,2,8,1,5],4) // 17
// maxSubArraySum([4,2,1,6],1) // 6
// maxSubArraySum([4,2,1,6,2],4) // 13
// maxSubArraySum([],4) // null

// O(n^2)
function maxSubarraySumNaive(arr, num) {
  if (num > arr.length) return null
  let max = -Infinity
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0
    for (let j = 0; j < num; j++) {
      temp += arr[i + j]
    }
    if (temp > max) {
      max = temp
    }
  }
  return max
}

// O(n)
function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0
  if (arr.length < num) return null
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}

const tests = [
  [[1, 2, 5, 2, 8, 1, 5], 2], // 10
  [[1, 2, 5, 2, 8, 1, 5], 4], // 17
  [[4, 2, 1, 6], 1], // 6
  [[4, 2, 1, 6, 2], 4], // 13
  [[], 4], // null
]

// tests.forEach(test => console.log(maxSubarraySum(...test)))

function maxSubarraySum2(arr, num) {
  if (arr.length < num) return null
  let max = 0
  let temp = 0
  // add first set
  for (let i = 0; i < num; i++) {
    max += arr[i]
  }
  temp = max
  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i]
    max = Math.max(temp, max)
  }
  return max
}

tests.forEach(test => console.log(maxSubarraySum2(...test)))
