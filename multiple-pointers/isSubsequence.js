// Write a function called isSubsequence which takes in two strings and
// checks whether the characters in the first string form a subsequence of
// he characters in the second string. In other words, the function should
// check whether the characters in the first string appear somewhere in the
// second string, without their order changing.

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

const tests = [
  ['hello', 'hello world'], // true
  ['sing', 'sting'], // true
  ['abc', 'abracadabra'], // true
  ['abc', 'acb'], // false (order matters)
]

tests.forEach(test => console.log(isSubsequence(...test)))
