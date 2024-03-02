"use strict";

const arr = [
  1,
  "text",
  {
    a: 4,
    b: 5,
  },
  [],
  4,
  "text2",
];
const nums = [2, 4, 5];

const copy = [...arr];

copy[4] = 11;
copy[2].b = 11;

console.log(arr);
console.log(copy);
