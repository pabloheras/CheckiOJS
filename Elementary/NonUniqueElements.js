/*
You are given a non-empty list of integers (X). For this task, you should return a list consisting of 
only the non-unique elements in this list. To do so you will need to remove all unique elements 
(elements which are contained in a given list only once). When solving this task, do not change the 
order of the list. 
Example: [1, 2, 3, 1, 3] 1 and 3 non-unique elements and result will be [1, 3, 1, 3].
*/


"use strict";
​
function nonUniqueElements(data) {
        
    let numMap = new Map();
    
    data.forEach(function(element){
        
        if(numMap.get(element)>=1)
            numMap.set(element, numMap.get(element)+1);
        else
            numMap.set(element, 1);
    });
    
    data = data.filter(function(element){
        if(numMap.get(element)>1)
          return true; 
        return false; 
    });
    
    return data;
​
}
​
var assert = require('assert');
​
if (!global.is_checking) {
    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}