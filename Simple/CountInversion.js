/*
In computer science and discrete mathematics, an inversion is a pair of places in a sequence 
where the elements in these places are out of their natural order. So, if we use ascending order 
for a group of numbers, then an inversion is when larger numbers appear before lower number 
in a sequence.

Check out this example sequence: (1, 2, 5, 3, 4, 7, 6) and we can see here three inversions
- 5 and 3; - 5 and 4; - 7 and 6.

You are given a sequence of unique numbers and you should count the number of inversions in 
this sequence.
*/

"use strict";
​
function countInversion(sequence){
    //Found the number of swaps by sorting the array with Bubble sort algorithm
    let count = 0;
    let swapped;
    
    //Keep checking if the array is sorted until no more swaps have been done
    do {
        swapped = false;
        for (let i=0; i < sequence.length-1; i++) {
            if (sequence[i] > sequence[i+1]) {
                let aux = sequence[i];
                sequence[i] = sequence[i+1];
                sequence[i+1] = aux;
                swapped = true;
                count++;
            }
        }
    } while (swapped);
    
    return count;
    
}
​
​
let assert = require('assert');
​
if (!global.is_checking) {
    assert.equal(countInversion([1, 2, 5, 3, 4, 7, 6]), 3, "Example");
    assert.equal(countInversion([0, 1, 2, 3]), 0, "Sorted");
    assert.equal(countInversion([99, -99]), 1, "Two numbers");
    assert.equal(countInversion([5, 3, 2, 1, 0]), 10, "Reversed");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}