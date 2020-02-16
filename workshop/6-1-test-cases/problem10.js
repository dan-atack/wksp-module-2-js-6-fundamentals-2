let verifyEquals = require('../../assets/verify-equals');

// Problem 10
// ----------
// Make this function return the input string, capitalized. You must use a for loop. For example:
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//    - Use a for loop to capitalize the words one by one
//    - Use the toUpperCase string method

function f(str) {
    let separated = str.split(" ");
    let output = [];
    for (let x = 0; x < separated.length; x++) {
      let lowered = separated[x].toLowerCase();
      lowered = (lowered[0].toUpperCase()) + lowered.slice(1,(lowered.length))
      output.push(lowered);
    }
    return output.join(" ");
};

// Test cases
let inputs = ["Do not bullshit me", "AAAAAAA", "hellO World:", "0a", "1"];
let outputs = ["Do Not Bullshit Me", "Aaaaaaa", "Hello World:", "0a", "1"];

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
