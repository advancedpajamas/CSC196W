/*
    Name: Ivince Pajarin
	Professor: Dr. Anna Baynes
	Class: CSC196W-01 - Web Programming
	Assignment: Week 04 - Fun with Javascript
	Due date: 2/23/2021
	fancifymytext.js
*/
function alertMsg() {
    alert("Hello, world!");
}

function biggerText() {
    document.getElementById("text").style.fontSize = "24px";
}

function fancyText() {
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}

function boringText() {
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
    document.getElementById("text").style.fontSize = "1em";
}

function upperCase() {
    var str = document.getElementById("text").value;
    var res = str.toUpperCase();
    document.getElementById("text").value = res;
}

function addMoo() {
    var str = document.getElementById("text").value;
    /*
    var parts = str.split(" ");
    var i;
    for (i = 0; i < parts.length - 1; i++)
    */
   var res = str.replaceAll("\.", "-Moo.");
   document.getElementById("text").value = res;
}

function moo() {
    addMoo();
    upperCase();
}


