"use strict";

function upsideDownTriangle(width) {
  let triangle = "";
  for (let i = width; i >= 0; i--) {
    for (let j = 0; j < width - i; j++) {
      triangle += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      triangle += "*";
    }

    triangle += "\n";
  }

  return triangle;
}

console.log(triangle(7));
