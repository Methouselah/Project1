"use strict";
// поиск по селектору (элемент)
const div = document.querySelector("div");

// поиск по селектору всех элементов (NodeList)
const divs = document.querySelectorAll("div");

// поиск по названию тега (HTMLCollection)
const inputs = document.getElementsByTagName("input");

// поиск по id (элемент)
const input = document.getElementById("input");

// поиск по class (HTMLCollection)
const inputClass = document.getElementsByClassName("input");

const p = document.createElement("p");
console.log(p);
