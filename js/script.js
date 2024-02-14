'use strict';

const name = prompt("Введите ваше имя:");
const greeting = "Привет, " + name + "! Добро пожаловать.";

console.log(greeting);
document.write("<h1>" + greeting + "</h1>");

// Запрашиваем у пользователя радиус круга
const radius = parseFloat(prompt("Введите радиус круга:"));

// Проверяем, что введено число и оно положительное
if (!isNaN(radius) && radius > 0) {
    // Вычисляем площадь круга
    const area = Math.PI * radius * radius;

    // Выводим площадь круга на экран
    console.log("Площадь круга с радиусом", radius, ":", area);
} else {
    // Если введено некорректное значение, выводим сообщение об ошибке
    console.log("Ошибка: Введите положительное число для радиуса круга.");
}

