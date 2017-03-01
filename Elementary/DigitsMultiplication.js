/*
You are given a positive integer. Your function should calculate the product of the digits excluding any zeroes.

For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).
*/

"use strict";

function digitsMultip(data) {
    //Convert the input number to an array with the digits through a conversion to string
    let digits = data.toString().split('');
    
    let i;
    let result = 1;
    
    //Calculate the result, avoiding 0s
    for(i=0; i<digits.length; i++){
        if(digits[i] != 0)
            result = result * digits[i];
    }
    
    return result;
}

let assert = require('assert');

if (!global.is_checking) {
    assert.equal(digitsMultip(123405), 120, "1st");
    assert.equal(digitsMultip(999), 729, "2nd");
    assert.equal(digitsMultip(1000), 1, "3rd");
    assert.equal(digitsMultip(1111), 1, "4th");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}