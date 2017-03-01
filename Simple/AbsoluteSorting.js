/*
The array has various numbers. You should sort it, but sort it by absolute value 
in ascending order. For example, the sequence (-20, -5, 10, 15) will be sorted like 
so: (-5, 10, 15, -20). Your function should return the sorted list .
*/

"use strict";

function absoluteSorting(numbers){
    //Used quick sort algorithm to sort the array
    return quicksort(numbers);
}

function quicksort(arr){
    
    if(arr.length == 0)
        return [];
 
    let left = [];
    let right = [];
    let pivot = arr[0];
 
    for(let i = 1; i < arr.length; i++){
        //Comparing the absolute value of the elements to sort
        if(Math.abs(arr[i]) < Math.abs(pivot)){
           left.push(arr[i]);
        }else{
           right.push(arr[i]);
        }
    }
 
    return quicksort(left).concat(pivot, quicksort(right));
}

let assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(absoluteSorting([-20, -5, 10, 15]), [-5, 10, 15, -20], "Example");
    assert.deepEqual(absoluteSorting([1, 2, 3, 0]), [0, 1, 2, 3], "Positive numbers");
    assert.deepEqual(absoluteSorting([-1, -2, -3, 0]), [0, -1, -2, -3], "Negative numbers");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}