"use strict";

const arr = [1, 2, 3, 4, 5];

arr.forEach(function (value, index, arr) {
  console.log(`${index}: ${value} in ${arr}`);
});
