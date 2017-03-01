/*
You are given a chunk of text. Gather all capital letters in one word in the order that they appear 
in the text.

For example: text = "How are you? Eh, ok. Low or Lower? Ohhh.", if we collect all of the capital letters,
we get the message "HELLO".
*/

"use strict";

function findMessage(data) {
    
    let i;
    let secretMessage = "";
    
    //Check capital letters (using Regular Expression) and concatenate them in secretMessage variable
    for(i=0; i<data.length; i++){
        if(/[A-Z]/.test(data[i]))
            secretMessage = secretMessage + data[i];
    }
    
    return secretMessage;
}

let assert = require('assert');

if (!global.is_checking) {
    assert.equal(findMessage("How are you? Eh, ok. Low or Lower? Ohhh."), "HELLO", "hello");
    assert.equal(findMessage("hello world!"), "", "Nothing");
    assert.equal(findMessage("HELLO WORLD!!!"), "HELLOWORLD", "Capitals");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}