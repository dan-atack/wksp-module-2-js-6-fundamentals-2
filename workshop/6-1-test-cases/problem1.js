// This line imports the verifyEquals function from the verify-equals.js file
let verifyEquals = require('../../assets/verify-equals');

// Problem 1
// ---------
// Step 1
// Write a function that returns the first character of the string that is passed to it.
// If the string does not have a first character, return undefined.

function f(str) {
    if (str[0] != undefined) {
        return str[0];
    } else {
        return undefined;
    }
};

// Step 2
// We need 5 test cases. The first input is provided.
// Don't forget to test all of the question parameters

let inputs = ['max', 'bacon', 'Zebra', 'lion', ''];
let outputs = ['m', 'b', 'Z', 'l', undefined];

for (let x = 0; x < inputs.length; x++) {
    console.log(f(inputs[x]) === outputs[x]);
};

// Step 3
// Run this file in the debugger.
// If you get the "All test passed for..." message, move on to the next exercise.

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
    if (i >= inputs.length) throw new Error('You do not have enough test cases');
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual); // verifyEquals is imported above
}
runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
console.log('All tests passed for ' + __filename);
