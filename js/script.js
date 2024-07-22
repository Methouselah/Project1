"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu"),
    content = document.querySelector(".content"),
    body = document.querySelector("body");

  burgerMenu.addEventListener("click", (e) => {
    if (content.classList[1] == "active") {
      content.classList.remove("active");
      burgerMenu.classList.remove("active");
      body.classList.remove("active");
    } else {
      content.classList.add("active");
      burgerMenu.classList.add("active");
      body.classList.add("active");
    }
  });
});
