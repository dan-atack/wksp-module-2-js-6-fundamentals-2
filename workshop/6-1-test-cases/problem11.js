let verifyEquals = require('../../assets/verify-equals');

// Problem 11
// ----------
// Make this function return the sum of all the numbers in the input array.
// If any element in the array is not a number, skip it. If the array is empty, return zero.

function f(arr) {
    if (arr.length > 0) {                               // determine array length at outset
        let total = 0;                                  // create empty total variable
        for (let i = 0; i < arr.length; i++) {          // for every item in the array,
            if (typeof arr[i] === 'number') {           // if that item is a number,
                total += arr[i];                        // add it to the total
            }
        }
        return total;
    }
    return 0;                                           // return 0 if array is empty.
};

// Test cases
let inputs = [[0], [], [1,2,3], ["a", "b", "c"], [1,"2",3]];
let outputs = [0, 0, 6, 0, 4];

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
