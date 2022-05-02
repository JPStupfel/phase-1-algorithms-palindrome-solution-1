function isPalindrome(word) {

  return word === word.split('').reverse().join('')
}

/* 
  Add your pseudocode here
Reverse the input.

check if reversed input is same as original.

if so, return true.

otherwise, return false.



*/

/*
  Add written explanation of your solution here

  Ok. So we need a function that takes a word and checks it against the reverse of itself. Meaning mom should return true and bad should return false. Those are actually the only two steps we need. step one, reverse the word. Step two, return the boolean of that word checked against itself.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
