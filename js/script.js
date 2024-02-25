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

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number" ||
    typeof d !== "number"
  ) {
    return 0;
  }

  return Math.max(a, b, c, d);
}

console.log(findMaxNumber(5, 9, 15));
