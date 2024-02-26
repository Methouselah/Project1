"use strict";

let person = {
  name: "Vasia",
  lastname: "grigoriev",
  params: {
    width: 33,
    old: 44,
  },
};

const { width, old } = person.params;

console.log(width);

for (let key in person) {
  if (typeof person[key] === "object") {
    for (let i in person[key]) {
      console.log(person[key][i]);
    }
  } else {
    console.log(person[key]);
  }
}
