'use strict';

// Цикл в цикле 
// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 5;

first:for (let i = 1; i <= 5; i++) {
    console.log(i);
    for (let j = 0; j < i; j++) {
        console.log(j);
        if (j === 2) break first;
    }
}
console.log(result);
