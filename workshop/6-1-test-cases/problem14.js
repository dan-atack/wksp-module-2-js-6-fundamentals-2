let verifyEquals = require('../../assets/verify-equals');

// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line. 
// This means you'll have to insert a newline \n character after every 40 characters in the input string. 
// If the next character after a cut is a space, then do not display it. 

// For example:
// with this input:
//      "Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam"

// the output would be:
//      Lorem ipsumos dolor sit amet consectetur
//      adipisicing elit. Magni quisquam"

// instead of:
//      Lorem ipsumos dolor sit amet consectetur
//       adipisicing elit. Magni quisquam

// even though there is a space before the a in adipisicing

function f(str) {
  let wrapped = [];     // this will start out as a list then get merged at the end.
  // Start by adding all the characters from input string to 'wrapped' array:
    for (let i = 0; i < str.length; i++) {
      wrapped.push(str[i]);
    }
    // Then, for every 40 characters in 'wrapped' array, add a line break character...
    for (let i = 40; i < wrapped.length; i += 40) {
      wrapped.splice(i, 0, "\n");
      // ... And then, if the character after the line break is a space, replace it with an empty string.
      if (wrapped[i+1] === " ") wrapped[i+1] = "";
    }
    // Lastly, join all the characters back together again and console log it to see the result:
  console.log(wrapped.join(""));
  return wrapped.join("");
};

// Test cases
let inputs = ["Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam", "A string containing a bunch of gibberish with a suitable break", "A short string", "And another string,", "                                                      ahahahaha"];
let outputs = ["Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam", "A string containing a bunch of gibberish\nwith a suitable break", "A short string", "And another string,", "                                        \n             ahahahaha"];

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
