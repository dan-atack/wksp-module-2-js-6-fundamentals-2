let verifyEquals = require('../../assets/verify-equals');

// Problem 12
// ----------
// Make this function return the elements that are unique to array1 and array2.
// An element is unique if it only appears once.
// If there are no unique elements return an empty array.
// If the inputs are anything other than arrays, return undefined.

// For example:
// uniqueElements([[0,1,2,3], [1,3,4,5]]); // [0,2,4,5]
// uniqueElements([[1,2,3], [3,2,1]]); // []
// uniqueElements(2); // undefined, not an array

// HINTS: 
//     - Use a for loop inside another for loop
//     - You will need to run your logic 2 times
//     - Once to get the unique elements in the first array
//     - A second time to get the unique elements in the second array

function f(input) {
    // Start with a big ugly conditional to ensure the input is an array containing two arrays:
    if ((input instanceof Array) && ((input[0] instanceof Array) && (input[1] instanceof Array))) {
        let arr1 = input[0];
        let arr2 = input[1];
        let candidates = [];
        let duplicates = [];
        let uniques = [];
        // Treat arr1 first: for each number, if it's not in the candidates list, add it to that. If it is in there it's a duplicate,
        // Which we will also hold onto for the moment.
        arr1.forEach(num => {
            if (!(candidates.includes(num))) {
                candidates.push(num);
            } else {
                duplicates.push(num);
            }
        });
        // Then repeat for arr2, using the same candidates/duplicates list as before, so that items that may have been unique to arr1
        // but are contained in arr2 can still be identified as duplicates
        arr2.forEach(num => {
            if (!(candidates.includes(num))) {
                candidates.push(num);
            } else {
                duplicates.push(num);
            }
        });
        // Lastly, we filter the candidates list by checking if any of its members are also in the duplicates list;
        // those that are not are returned to the 'uniques' array.
        uniques = candidates.filter(elem => {
            return (!(duplicates.includes(elem)));
        });
        // Return the final list of unique elements:
        return uniques;
    } else return undefined;
};

// Test cases
let inputs = [
    [[0, 1, 2, 3], [1, 3, 4, 5]],
    [[1, 2, 3], [1, 2, 3]],
    [2, 3],
    "A",
    [["a", "b", "c", true], [true, false, "c", 4]]
];
let outputs = [
    [0, 2, 4, 5],
    [],
    undefined,
    undefined,
    ["a", "b", false, 4]
];

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
