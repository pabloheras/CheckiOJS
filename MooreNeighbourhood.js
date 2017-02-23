"use strict";

function countNeighbours(data, row, col) {

    //Setting matrix edges, decreasing 1 so range goes from 0 to length-1
    let maxRow = data.length-1;
    let maxCol = data[0].length-1;
    
    //Setting the boundaries to know the cells to check around the one for which we have to find neighbours
    let initialRowPos = (row-1 < 0) ? 0 : row-1; 
    let finalRowPos = (row+1 > maxRow) ? maxRow : row+1; 
    let initialColPos = (col-1 < 0) ? 0 : col-1;
    let finalColPos = (col+1 > maxCol) ? maxCol : col+1;
    //Counter of neighbours
    let count = 0;
    //loop iterators
    let i;
    let j;

    //finding neighbours
    for(i=initialRowPos; i<=finalRowPos; i++){
        for(j=initialColPos; j<=finalColPos; j++){
            if(data[i][j] == 1)
                count++;
        }
    }
    
    //decrease the count if the main cell has a value as we are not interested in it
    if(data[row][col] == 1)
        count--;
    
    return count;
}


var assert = require('assert');

if (!global.is_checking) {
    assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 1, 2), 3, "1st example");

    assert.equal(countNeighbours([[1, 0, 0, 1, 0],
                                  [0, 1, 0, 0, 0],
                                  [0, 0, 1, 0, 1],
                                  [1, 0, 0, 0, 0],
                                  [0, 0, 1, 0, 0]], 0, 0), 1, "2nd example");

    assert.equal(countNeighbours([[1, 1, 1],
                                  [1, 1, 1],
                                  [1, 1, 1]], 0, 2), 3, "Dense corner");

    assert.equal(countNeighbours([[0, 0, 0],
                                  [0, 1, 0],
                                  [0, 0, 0]], 1, 1), 0, "Single");

    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
