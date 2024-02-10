'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastFilm = prompt('Один из последних просмотренных фильмов', ''),
  lastFilmGrade = prompt("На сколько оцените его?'", '');

personalMovieDB.movies[lastFilm] = lastFilmGrade;

console.log(personalMovieDB);