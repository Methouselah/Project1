"use strict";
// --------------------- example 1 ---------------------
function pow(x, y) {
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
}

function pow(x, y) {
  if (y === 0) {
    return x;
  } else {
    return x * pow(x, y - 1);
  }
}

const result = [];
result.push(pow(2, 2));
result.push(pow(2, 3));
result.push(pow(2, 4));
// console.log(result);

// --------------------- example 2 ---------------------

let students = {
  js: [
    {
      name: "John",
      progress: 100,
    },
    {
      name: "Ivan",
      progress: 60,
    },
  ],
  html: {
    basic: [
      {
        name: "Peter",
        progress: 20,
      },
      {
        name: "Ann",
        progress: 18,
      },
    ],
    pro: [
      {
        name: "Sam",
        progress: 10,
      },
    ],
  },
};

function getTotalProgressByIteration(data) {
  let total = 0;
  let students = 0;

  for (const course of Object.values(data)) {
    if (Array.isArray(course)) {
      students += course.length;
      for (let item of course) {
        total += item.progress;
      }
    } else {
      for (const subCourse of Object.values(course)) {
        if (Array.isArray(subCourse)) {
          students += subCourse.length;
          for (let item of subCourse) {
            total += item.progress;
          }
        }
      }
    }
  }

  return total / students;
}

function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }
    return [total, data.length];
  } else {
    let total = [0, 0];

    for (let subData of Object.values(data)) {
      const subDataArr = getTotalProgressByRecursion(subData);
      total[0] += subDataArr[0];
      total[1] += subDataArr[1];
    }
    return total;
  }
}

const result2 = getTotalProgressByRecursion(students);

console.log(result2[0] / result2[1]);
console.log(getTotalProgressByIteration(students));
