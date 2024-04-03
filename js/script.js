"use strict";

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

// __________________ 1 __________________

document.querySelectorAll(".promo__adv img").forEach((item) => {
  item.remove();
});

// __________________ 2 __________________
document.querySelector(".promo__genre").innerHTML = "драма";

// __________________ 3 __________________
const bg = document.querySelector(".promo__bg");

bg.style.background = `url("../foto/bg.jpg") center / cover no-repeat`;

// __________________ 4 __________________
const interactiveList = document.querySelector(".promo__interactive-list");
interactiveList.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((item, index) => {
  interactiveList.innerHTML += `<li class="promo__interactive-item">
    ${index + 1}. ${item}
    <div class="delete"></div>
  </li>`;
});

const title = document.querySelector(".title");
title.addEventListener("click", (e) => {
  console.log(e);
});
