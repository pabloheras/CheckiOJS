/*
You are given an array of integers. You should find the sum of the elements with even indexes 
(0th, 2nd, 4th...) then multiply this summed number and the final element of the array together. 

For an empty array, the result will always be 0 (zero).
*/

"use strict";

function evenLast(data) {

    let i= 0; //iterator
    let result = 0; //final result container
    
    //If the array is not empty
    if(data.length){
        while(i<data.length){
            result = result + data[i];
            i = i+2;
        }
        
        result = result * data[data.length-1];
    }     
    
    return result;
}

let assert = require('assert');

if (!global.is_checking) {
    assert.equal(evenLast([0, 1, 2, 3, 4, 5]), 30, "(0+2+4)*5=30");
    assert.equal(evenLast([1, 3, 5]), 30, "(1+5)*5=30");
    assert.equal(evenLast([6]), 36, "(6)*6=36");
    assert.equal(evenLast([]), 0, "An empty array = 0");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}