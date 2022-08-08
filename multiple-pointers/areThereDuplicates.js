// Implement a function called, areThereDuplicates which accepts a 
// variable number of arguments, and checks whether there are any 
// duplicates among the arguments passed in.  You can solve this 
// using the frequency counter pattern OR the multiple pointers pattern.

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true

// frequency counter
function areThereDuplicates2(arr) {
  if (!arr.length) return false;
  let lookup = {};
  for (let i = 0; i < arr.length; i++) {
    if (lookup[arr[i]]) return true;
    lookup[arr[i]] = lookup[arr[i]] + 1 || 1;
  }
  return false;
}

// multiple pointers
function areThereDuplicates(arr) {
  if (!isNaN(arr[0])) {
    arr.sort((a, b) => a > b);
  } else {
    arr.sort((a, b) => a.localeCompare(b));
  }
  let start = 0;
  let next = 1;
  while (next < arr.length) {
    if (arr[start] === arr[next]) {
      return true
    }
    start++
    next++
  }
  return false
}

const tests = [
  [1, 2, 3], // false
  [1, 2, 2], // true 
  ['a', 'b', 'c', 'a'], // true
]

tests.forEach(test => console.log(areThereDuplicates(test)))
