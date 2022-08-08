// Given two strings, write a function to determine if the
// second string is an anagram of the first. Return a boolean.
// Ex: cinema - iceman
// Ex: anagram - nagaram

// O(n) - Linear, no stacking loops
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false
  const counter1 = {}
  const counter2 = {}
  // count str1
  for (let char of str1) {
    counter1[char] = ++counter1[char] || 1
  }
  // count str2
  for (let char of str2) {
    counter2[char] = ++counter2[char] || 1
  }
  // compare both counters
  for (let char of str1) {
    // if frequency does not match for each key return false
    if (counter1[char] !== counter2[char]) return false
  }
  return true
}

let tests = [
  ['', ''], // true
  ['aaz', 'zza'], // false
  ['cinema', 'iceman'], // true
  ['anagram', 'nagaram'], // true
  ['rat', 'car'], // false
  ['rat', 'tar'], // true
  ['qwerty', 'qeywrt'], // true
  ['texttwisttime', 'timetwisttext'] // true
]

tests.forEach(test => console.log(validAnagram(...test)))

// O(n) - Linear, two non stacked loops
function validAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false
  const lookup = {}
  // count str1 characters
  for (let char of str1) {
    lookup[char] = ++lookup[char] || 1
  }
  for (let char of str2) {
    // if str2 character returns 0 or undefined from str1's count, return false
    if (!lookup[char]) {
      return false
    } else {
      // str2 found in lookup count, subtract 1
      lookup[char] -= 1
    }
  }
  return true
}

tests.forEach(test => console.log(validAnagram2(...test)))
