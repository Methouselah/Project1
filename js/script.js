"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".button");
  btn.addEventListener("touch", (e) => {
    console.log(e);
  });
});
