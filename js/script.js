"use strict";
const input = document.getElementById("input"),
  output = document.getElementById("output"),
  button = document.getElementById("button");

const arr = [3, 8, 1, 10, 5, 14, 6, 8, 99];
function maxNumber(num) {
  let max = num[0];
  for (let i = 1; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    }
  }
  return max;
}

output.innerHTML = maxNumber(arr);
