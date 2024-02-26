"use strict";

let person = {
  name: "Vasia",
  lastname: "grigoriev",
  params: {
    width: 33,
    old: 44,
  },
};

for (const key in person) {
  let element = person[key];
  console.log(element);
}
