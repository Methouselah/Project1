"use strict";

const car = {
  width: 3.5,
  color: "white",
  motor: 350,
};

const mersedes = {
  width: 3.0,
  motor: 250,
};

mersedes.__proto__ = car; // устаревший способ

Object.setPrototypeOf(mersedes, car);
