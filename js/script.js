"use strict";

arr = [4, 5, 6, 6, 7, 7, 7];

function clearArr(arr) {
  for (let i = 0; i <= arr.length; i++) {
    console.log(arr.pop());
  }
}

clearArr(arr);
console.log(arr);
