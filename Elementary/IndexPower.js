/*
You are given an array with positive numbers and a number N. You should find the N-th 
power of the element in the array with the index N. If N is outside of the array, then 
return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:
- array = [1, 2, 3, 4] and N = 2, then the result is 32 == 9;
- array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
*/

"use strict";

function indexPower(array, n){
    //Return only the value if it's in the array
    if(n < array.length)
        return Math.pow(array[n], n);
    //If not in the array return -1
    return -1;
}

let assert = require('assert');

if (!global.is_checking) {
    assert.equal(indexPower([1, 2, 3, 4], 2), 9, "Square");
    assert.equal(indexPower([1, 3, 10, 100], 3), 1000000, "Cube");
    assert.equal(indexPower([0, 1], 0), 1, "Zero power");
    assert.equal(indexPower([1, 2], 3), -1, "IndexError");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}