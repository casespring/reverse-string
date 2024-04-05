function reverseString(str) {
  // type your code here
  let reversed = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i])
  }
  return reversed.join('')
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// function reverseString that takes a string
      //loop over array while or for loop 
      // then take the last index of the array and add it to a new array in that order
      // return the new array as a string 