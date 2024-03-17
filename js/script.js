"use strict";
const input = document.getElementById("input"),
  output = document.getElementById("output"),
  button = document.getElementById("button");

const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
];

function sortStudentsByGroups(arr) {
  const a = [],
    b = [],
    c = [],
    rest = [];
  arr.sort();

  for (let i = 0; i < arr.length; i++) {
    if (i < 3) {
      a.push(arr[i]);
    } else if (i < 6) {
      b.push(arr[i]);
    } else if (i < 9) {
      c.push(arr[i]);
    } else {
      rest.push(arr[i]);
    }
  }

  return [
    a,
    b,
    c,
    `Оставшиеся студенты: ${rest.length !== 0 ? rest.join(", ") : "-"} `,
  ];
}

console.log(sortStudentsByGroups(students));
