"use strict";

// Место для первой задачи
function getTimeFromMinutes(param) {
  if (typeof param !== "number" || param < 0 || !Number.isInteger(param)) {
    return "Ошибка, проверьте данные";
  }

  if (param <= 600) {
    return `Это ${Math.trunc(param / 60)} часа и ${param % 60} минут`;
  } else {
    return "слишком большое число";
  }
}
console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));
console.log(getTimeFromMinutes("helo"));

// Место для второй задачи
function findMaxNumber() {}
