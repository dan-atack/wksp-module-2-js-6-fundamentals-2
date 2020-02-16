let verifyEquals = require('../../assets/verify-equals');

// Problem 3
// ---------
// Step 1
// This function expects an array of 2 numbers as input (e.g. [1,2])
// Make this function return the sum of the two numbers that are passed to it.
// If anything other than an array with 2 numbers is passed, return undefined.
// You can use the typeof function to check the type of each element (e.g. typeof 3 returns 'number')

function f(input) {
    if ((input.length === 2) && (typeof input[0] === 'number') && (typeof input[1] === 'number')) {
        return (input[0] + input[1]);
    } else {
        return undefined;
    }
};

// Step 2
// We need 7 test cases. The first input is provided.
// Don't forget to test all of the question parameters

let inputs = [[2, 4], [-3, 3], [0, 0], ["x","y"], [1,2,3], ["1", "2"], [23]];
let outputs = [6, 0, 0, undefined, undefined, undefined, undefined];

for (let i = 0; i < inputs.length; i++) {
    console.log(f(inputs[i]) === outputs[i]);
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
    verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);

console.log('All tests passed for ' + __filename);