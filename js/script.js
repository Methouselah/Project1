"use strict";

var expect = function (val) {
  return {
    toBe: function (expected) {
      if (val !== expected) {
        throw new Error("Not Equal");
      }
      return true;
    },
    notToBe: function (notExpected) {
      if (val === notExpected) {
        throw new Error("Equal");
      }
      return true;
    },
  };
};

console.log(expect(5).toBe(5));

let test = 5 == 4 ? true : false;

console.log(test);
