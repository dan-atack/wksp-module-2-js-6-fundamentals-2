let verifyEquals = require('../../assets/verify-equals');

// Problem 7
// ---------
// Step 1
// - The function input is an array. 
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array. 
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function f(arr) {
    if (typeof arr[0] === 'string' && typeof arr[1] === 'number') {
        let output = "";
        if (arr[1] > 0) {
            for (let x = 1; x <= arr[1]; x++) {
                output = output.concat(arr[0]);
            }
        }
        return output;
    }
    return undefined;
};

// Step 2
// We need 7 test cases.
// Don't forget to test all of the question parameters

let inputs = [["AAaaa", 6], ["No", 10], [5,5], ["I love this problem", 0], ["Yes", "yes"], ["xix", -100], ["whoa.", 1]];
let outputs = ["AAaaaAAaaaAAaaaAAaaaAAaaaAAaaa", "NoNoNoNoNoNoNoNoNoNo", undefined, "", undefined, "", "whoa."];

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
