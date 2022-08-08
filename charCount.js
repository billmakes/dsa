// alphanumeric count of characters in a string
function charCount(str) {
  let obj = {}
  let lcStr = str.toLowerCase()
  for (let c of lcStr) {
    if (/[a-z0-9]/.test(c)) {
      obj[c] = ++obj[c] || 1
    }
  }
  return obj
}



console.log(charCount("Your PIN number is 1234!"))
console.log(charCount("Hello"))
