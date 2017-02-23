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