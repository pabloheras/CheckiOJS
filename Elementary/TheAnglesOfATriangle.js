/*
You are given the lengths for each side on a triangle. You need to find all three angles for 
this triangle. If the given side lengths cannot form a triangle (or form a degenerated triangle), 
then you must return all angles as 0 (zero). The angles should be represented as a list of 
integers in ascending order. Each angle is measured in degrees and rounded to the nearest 
integer number (Standard mathematical rounding).
*/

"use strict";

function triangleAngles(a, b, c){
    
    /*
    Function to find the angles: Angle = (side1^2 + side2^2 - side3^2) / (2*side1*side2)
    The solution to that function is in radians, so afterwards changing to degrees, and the solution is Rounded
    to avoid floating point mistakes
    */
    let angle1 = Math.round(Math.acos((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2*a*b)) * 180 / Math.PI);
    let angle2 = Math.round(Math.acos((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2*b*c)) * 180 / Math.PI);
    let angle3 = 180 - angle1 - angle2;
    
    let angles = [];
    
    //If the sides can make a triangle, it saves the result
    if((angle1 + angle2 + angle3 == 180) && (angle1 != 0) && (angle2 != 0) && (angle3 != 0)){
        angles.push(angle1);
        angles.push(angle2);
        angles.push(angle3);
    }else
        angles = [0,0,0];

    //Function to sort numerically
    function sortingArray(a, b) {
        return a - b;
    }
    
    return angles.sort(sortingArray);
}

let assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(triangleAngles(4, 4, 4), [60, 60, 60], "All sides are equal");
    assert.deepEqual(triangleAngles(3, 4, 5), [37, 53, 90], "Egyptian triangle");
    assert.deepEqual(triangleAngles(2, 2, 5), [0, 0, 0], "It's can not be a triangle");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}