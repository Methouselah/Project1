"use strict";

// Место для первой задачи
function sayHello(name) {
  return `Привет, ${name}!`;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1];
}

// Место для третьей задачи
function getMathResult(num, times) {
  let result = "";
  if (typeof times === "string" || times <= 0) {
    return num;
  }

  for (let i = 0; i <= times; i++) {
    if (i === times) {
      result += `${num * i}`;
    } else {
      result += `${num * i}---`;
    }
  }
  return result;
}
