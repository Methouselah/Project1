"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".input"),
    output = document.querySelector(".output"),
    btn = document.querySelector("button"),
    wrapper = document.querySelector(".wrapper");

  wrapper.addEventListener("click", (e) => {
    if (e.target && e.target.tagName == "BUTTON") {
      console.dir(e.target);
    }
  });
});
