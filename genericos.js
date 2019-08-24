"use strict";
function randomIntElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
function randomStrElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
function randomElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
var positions = [103, 458, 472, 458];
var randomPosition = randomElem(positions);
var colors = ['violet', 'indigo', 'blue', 'green'];
var randomColor = randomElem(colors);
function removeChar(theString, theChar) {
    var theRegex = new RegExp(theChar, "gi");
    return theString.replace(theRegex, '');
}
function removeIt(theInput, theIt) {
    var theRegex = new RegExp(theIt, "gi");
    return theInput.replace(theRegex, '');
}
