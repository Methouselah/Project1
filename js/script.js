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
