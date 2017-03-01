/*
Tic-Tac-Toe, sometimes also known as Xs and Os, is a game for two players (X and O) who take 
turns marking the spaces in a 3x3 grid. The player who succeeds in placing three respective marks 
in a horizontal, vertical, or diagonal rows (NW-SE and NE-SW) wins the game.

But we will not be playing this game. You will be the referee for this games results. You are given 
a result of a game and you must determine if the game ends in a win or a draw as well as who will be 
the winner. Make sure to return "X" if the X-player wins and "O" if the O-player wins. If the game is 
a draw, return "D".
*/


"use strict";
​
function xoReferee(data) {
    
    let i;
    
    //Checking if anyone wins horizontally, in each iteration we compare the elements in one of the rows
    for(i=0; i<data.length; i++){
        if((data[i][0] == data[i][1]) && (data[i][1] == data[i][2]) && (data[i][0] != '.'))
            return data[i][0];
    }
    
    //Checking if anyone wins vertically, in each iteration we compare the elements in one of the columns
    for(i=0; i<data.length; i++){
        if((data[0][i] == data[1][i]) && (data[1][i] == data[2][i]) && (data[0][i] != '.'))
            return data[0][i];
    }
​
    //Checking if anyone wins diagonally
    if((data[0][0] == data[1][1]) && (data[1][1] == data[2][2]) && (data[0][0] != '.'))
        return data[0][0];
    
    if((data[0][2] == data[1][1]) && (data[1][1] == data[2][0]) && (data[0][2] != '.'))
        return data[0][2];
    
    //If no one won, it's a draw
    return "D";
}
​
let assert = require('assert');
​
if (!global.is_checking) {
    assert.equal(xoReferee([
        "X.O",
        "XX.",
        "XOO"]), "X", "Xs wins");
​
    assert.equal(xoReferee([
        "OO.",
        "XOX",
        "XOX"]), "O", "Os wins");
​
    assert.equal(xoReferee([
        "OOX",
        "XXO",
        "OXX"]), "D", "Draw");
​
    assert.equal(xoReferee([
        "O.X",
        "XX.",
        "XOO"]), "X", "Xs wins again");
​
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}