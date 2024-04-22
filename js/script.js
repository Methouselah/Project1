"use strict";

const output = document.querySelector("#output"),
  btn = document.querySelector(".button"),
  input = document.querySelector("#input");

let leakedArray = [];

function createMemoryLeak() {
  for (let i = 0; i < 10000; i++) {
    leakedArray.push(new Array(1000000).join("x"));
  }
}

createMemoryLeak();
