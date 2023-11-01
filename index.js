function isPalindrome(string) {
  //get the length of the string and store it in a var "result"
  let result = string.length
  //create a for loop to divide the length in half
  for (let i = 0; i < result / 2; i++) {
    //check if the first and last string are the same
    if (string[i] !== string[result - 1 - i]) {
      //if they don't match, return false
    return false;
} else {
  //if they do match, return true
  return true;
}
  }
}

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
