let verifyEquals = require('../../assets/verify-equals');

// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No

function f(str) {
    // First, eliminate spaces from the original string and convert to lowercase to widen the field of allowable palindromes:
    let spaceOut = (str.toLowerCase().split(" ")).join("");
    // Reverse will start as an empty list then get filled with the letters of the spaceless string, in reverse order:
    let reverse = [];
    for (let i = spaceOut.length-1; i >= 0; i--) {
        reverse.push(spaceOut[i]);
    }
    // Then join reverse into a string and see if it's the same as the original - if so it is a palindrome:
    return (reverse.join("") === spaceOut);
};

// Test cases
let inputs = ["atta", "Attaboy", "Noon", "Noonish", "A man a plan a canal panama"];
let outputs = [true, false, true, false, true];

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
