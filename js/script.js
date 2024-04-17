"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const output = document.querySelector("#output"),
    btn = document.querySelector(".button"),
    input = document.querySelector("input");

  let i = 0;
  function log() {
    console.log("lekdfdlmdfld");
    i++;
    if (i === 10) {
      clearTimeout(timer2);
    }
    timer2 = setTimeout(log, 100);
  }
});
