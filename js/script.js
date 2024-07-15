"use strict";

window.addEventListener("scroll", function () {
  const image = document.querySelector(".header_logo_img");
  const maxRotation = 20; // Максимальный угол вращения в градусах

  // Получаем текущую позицию прокрутки страницы
  const scrollPosition = window.scrollY;

  // Вычисляем высоту страницы и окна просмотра
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Вычисляем процент прокрутки страницы (от 0 до 1)
  const scrollPercentage = scrollPosition / pageHeight;

  // Вычисляем угол вращения на основе процента прокрутки
  const rotationAngle = maxRotation * (scrollPercentage * 2 - 1);

  // Применяем вращение к изображению
  image.style.transform = `rotate(${rotationAngle}deg)`;
});
