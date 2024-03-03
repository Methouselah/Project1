"use strict";

const someString = "This is some strange string";

function reverse(str) {
  if (typeof str !== "string") {
    return "Ошибка!";
  }

  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  //  return str.split('').reverse().join('');

  return newStr;
}

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
  let result = "";
  result = arr.length === 0 ? "Нет доступных валют" : `Доступные валюты:\n`;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === missingCurr) {
      continue;
    }
    result += `${arr[i]}\n`;
  }
  return result;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "RUB"));
