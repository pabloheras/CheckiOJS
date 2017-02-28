/*
You are given a string with words and numbers separated by whitespaces (one space). The words 
contains only letters. You should check if the string contains three words in succession. 

For example, the string "start 5 one two three 7 end" contains three words in succession.
*/

"use strict";

function threeWords(data) {
   
   //Take the words of the string into an array
   let allWords = data.split(' ');
   
   let count = 0;
   let i;
   
   
   for(i=0; i<allWords.length; i++){
      //If the word has only letters the counter goes up
      if(/[a-zA-Z]/.test(allWords[i])){
        count++;
        if(count == 3)
            return true;
      }else
        count = 0;
        
   }
   
   return false;
}

let assert = require('assert');

if (!global.is_checking) {
    assert.equal(threeWords("Hello World hello"), true, "1st example");
    assert.equal(threeWords("He is 123 man"), false, "2nd example");
    assert.equal(threeWords("1 2 3 4"), false, "3rd example");
    assert.equal(threeWords("bla bla bla bla"), true, "4th example");
    assert.equal(threeWords("Hi"), false, "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}