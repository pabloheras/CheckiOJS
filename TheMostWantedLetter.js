"use strict";

function mostWanted(data) {
    
    //Set array with all the chars with all letters in lower case
    let allChars = data.toLowerCase().split('');
    //Map that will contain each char as key and occurrence as value
    let myMap = new Map();
    
    //RegExp to identify letters
    let letter = /^[a-z]+$/;

    let highestOcurrence = 1;
    
    allChars.forEach(function(element){
        
        //Finding the occurrence for each element
        if(letter.test(element))
            (myMap.get(element)>=1) ? myMap.set(element, myMap.get(element)+1) : myMap.set(element, 1);
        //Taking the value of the key with more occurrence
        if(myMap.get(element)>highestOcurrence)
            highestOcurrence = myMap.get(element);
                        
    });

    
    //Clean the map from the elements with not the highest occurrence
    myMap.forEach(function(value, key){
        if(value<highestOcurrence)
            myMap.delete(key);
    });

    let firstLetter = 'z';
    //Take the first letter in alphabetical order, in case there is more than one letter with same occurrence
    myMap.forEach(function(value, key){
         if(key<firstLetter)
            firstLetter = key;
    });
    
    return firstLetter;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(mostWanted("Hello World!"), "l", "1st example");
    assert.equal(mostWanted("How do you do?"), "o", "2nd example");
    assert.equal(mostWanted("One"), "e", "3rd example");
    assert.equal(mostWanted("Oops!"), "o", "4th example");
    assert.equal(mostWanted("AAaooo!!!!"), "a", "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}