"use strict";

const dataCurrent = document.querySelector('[data-current="3"]');

const current = document.querySelector("#current");
// console.log(current.parentNode); // родитель
// console.log(current.parentNode.parentNode); // родитель родителя
// console.log(current.previousSibling);
// console.log(current.nextSibling);

console.log(dataCurrent.previousElementSibling); // предыдущий элемент
console.log(dataCurrent.nextElementSibling); // следующий элемент
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);
