"use strict";
const input = document.getElementById("input"),
  output = document.getElementById("output"),
  button = document.getElementById("button");

const arr = [3, 8, 1, 10, 5, 14, 6, 8, 99];
function maxNumber(num) {
  return Math.max(...arr);
}

output.innerHTML = maxNumber(arr);
