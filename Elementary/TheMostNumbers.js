/*
You are given an array of numbers (floats). You should find the difference between the maximum 
and minimum element. Your function should be able to handle an undefined amount of arguments. 
For an empty argument list, the function should return 0.

Floating-point numbers are represented in computer hardware as base 2 (binary) fractions. So we 
should check the result with ±0.001 precision.
Think about how to work with an arbitrary number of arguments.
*/

"use strict";

function mostNumbers(numbers){
    
    //Used ES6 spread syntax to find the max and min values from the variable input (arguments is a 
    // keyword for an array-like object when having variable input)
    if(arguments.length){
        return Math.max(...arguments) - Math.min(...arguments);   
    }
    
    return 0;
}

let assert = require('assert');

if (!global.is_checking) {
    assert.equal(mostNumbers(1, 2, 3), 2, "3-1=2");
    assert.equal(mostNumbers(5, -5), 10, "5-(-5)=10");
    assert.equal(Math.round(mostNumbers(10.2, -2.2, 0, 1.1, 0.5)*1000), 12400, "10.2-(-2.2)=12.4");
    assert.equal(mostNumbers(), 0, "Empty");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}