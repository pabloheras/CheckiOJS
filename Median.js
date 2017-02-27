/*
A median is a numerical value separating the upper half of a sorted array of numbers from the 
lower half. In a list where there are an odd number of entities, the median is the number found 
in the middle of the array. If the array contains an even number of entities, then there is no 
single middle value, instead the median becomes the average of the two numbers found in the middle. 
For this mission, you are given a non-empty array of natural numbers (X). With it, you must separate 
the upper half of the numbers from the lower half and find the median.

*/


"use strict";
​
function median(data) {
    
    //sorting array for numbers
    data.sort(function(a,b){
        return a-b;    
    });
    
    
    if(data.length%2 != 0){
        return data[Math.trunc(data.length/2)];
    }
    else{
        return (data[(data.length/2)-1]+data[data.length/2])/2;
    }
}
​
​
var assert = require('assert');
​
if (!global.is_checking) {
    assert.equal(median([1, 2, 3, 4, 5]), 3, "1st example");
    assert.equal(median([3, 1, 2, 5, 3]), 3, "2nd example");
    assert.equal(median([1, 300, 2, 200, 1]), 2, "3rd example");
    assert.equal(median([3, 6, 20, 99, 10, 15]), 12.5, "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}