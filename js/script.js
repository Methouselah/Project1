"use strict";

// Место для первой задачи
function calculateVolumeAndArea(edge) {
  let square, volume, result;

  if (typeof edge === "number" && edge > 0 && edge === Math.round(edge)) {
    square = Math.pow(edge, 3);
    volume = 6 * Math.pow(edge, 2);
    result = `Объем куба: ${square}, площадь всей поверхности: ${volume}`;
  } else {
    result = "При вычислении произошла ошибка";
    return result;
  }
  return result;
}

// оптимизированная версия
function calculateVolumeAndArea(edge) {
  if (typeof edge !== "number" || edge <= 0 || edge !== Math.round(edge)) {
    return "При вычислении произошла ошибка";
  }

  const square = Math.pow(edge, 3);
  const volume = 6 * Math.pow(edge, 2);

  return `Объем куба: ${square}, площадь всей поверхности: ${volume}`;
}

// Место для второй задачи
function getCoupeNumber(number) {
  let result;
  if (
    typeof number !== "number" ||
    number != Math.round(number) ||
    number < 0
  ) {
    result = "Ошибка. Проверьте правильность введенного номера места";
    return result;
  }
  if (number >= 36 || number == 0) {
    result = "Таких мест в вагоне не существует";
    return result;
  }
  result = Math.ceil(number / 4);

  return result;
}

console.log(getCoupeNumber("hello"));

// оптимизированная версия
function getCoupeNumber(number) {
  if (
    typeof number !== "number" ||
    !Number.isInteger(number) ||
    number <= 0 ||
    number >= 36
  ) {
    return number <= 0 || number >= 36
      ? "Таких мест в вагоне не существует"
      : "Ошибка. Проверьте правильность введенного номера места";
  }

  return Math.ceil(number / 4);
}
