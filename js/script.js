"use strict";

document.addEventListener('DOMContentLoaded', function() {
  const hoverElement = document.querySelector('.header__nav__link');

  hoverElement.addEventListener('mouseover', function() {
      hoverElement.style.backgroundColor = '#d1e7dd';
      hoverElement.textContent = 'Mouse is over!';
  });

  hoverElement.addEventListener('mouseout', function() {
      hoverElement.style.backgroundColor = '#e9ecef';
      hoverElement.textContent = 'Hover over me!';
  });
});
